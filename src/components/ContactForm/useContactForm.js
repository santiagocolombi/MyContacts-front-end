import { useState, useEffect, useImperativeHandle} from "react";
import isEmailValid from "../../utils/isEmailValid";
import useErrors from "../../hooks/useErrors";
import formatPhone from "../../utils/formatPhone";
import CategoriesService from "../../services/CategoriesService";
export default function useContacForm(onSubmit, ref){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [categoryId, setCategoryId] = useState(''); //controlled component
    const [categories , setCategories] = useState([])
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const {setError, removeError, getErrorMessageByFieldName, errors,} = useErrors();
    const isFormValid = (name && errors.length === 0 );
    const [isSubmitting, setIsSubmitting] = useState(false);

    useImperativeHandle(ref, ()=> ({
        setFieldsValues: (contact) => {
            setName(contact.name ?? '');
            setEmail(contact.email ?? '');
            setPhone(formatPhone(contact.phone ?? ''));
            setCategoryId(contact.category.id ?? '')
        },
        resetFields: () =>{
            setName('');
            setEmail('');
            setPhone('');
            setCategoryId('');
        }
    }),[])

    useEffect(() => {
        async function loadCategories(){
           try{
            const  categoriesList = await CategoriesService.listCategories()
            setCategories(categoriesList);
           } catch {

           } finally{
            setIsLoadingCategories(false);
           }

        }
        loadCategories()
    }, []);




    function hadleNameChange(event) {
        setName(event.target.value);

        if(!event.target.value){
           setError({field:'name', message: 'Nome é obrigatório.'})
        } else {
            removeError('name');
    }
}

    function handleEmailChange(event){
        setEmail(event.target.value);

        if(event.target.value && !isEmailValid(event.target.value)){
            setError({field:'email', message: 'E-mail inválido.'})

        } else{
                removeError('email');
        }

    }
    function handlePhoneChange(event){
        setPhone(formatPhone(event.target.value));
    }

    async function handleSubmit(event){
        event.preventDefault();
        setIsSubmitting(true);
        await onSubmit({ name, email, phone, categoryId, });

        setIsSubmitting(false);


    }
    return {
handleSubmit,
getErrorMessageByFieldName,
name,
hadleNameChange,
isSubmitting,
email,
phone,
handlePhoneChange,
isLoadingCategories,
categoryId,
categories,
isFormValid,
setCategoryId,
handleEmailChange,
};
}
