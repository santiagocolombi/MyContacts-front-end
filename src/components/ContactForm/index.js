import FormGroup from "../FormGroup";
import { Form, BuutonContainer } from "./styles";
import Input from '../input'
import Select from '../Select';
import Button from '../Button';
import PropTypes from "prop-types";
import { useState, useEffect} from "react";
import isEmailValid from "../../utils/isEmailValid";
import useErrors from "../../hooks/useErrors";
import formatPhone from "../../utils/formatPhone";
import CategoriesService from "../../services/CategoriesService";


export default  function ContactForm({buttonLabel, onSubmit}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [categoryId, setCategoryId] = useState(''); //controlled component
    const [categories , setCategories] = useState([])
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const {setError, removeError, getErrorMessageByFieldName, errors,} = useErrors();
    const isFormValid = (name && errors.length === 0 );
    const [isSubmitting, setIsSubmitting] = useState(false);

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

        setIsSubmitting(false)


    }
    console.log(getErrorMessageByFieldName('name'))
    return (
        <Form onSubmit={handleSubmit} noValidate>
           <FormGroup error = {getErrorMessageByFieldName('name')}>
            <Input value={name} placeholder="Nome *"
            error = {getErrorMessageByFieldName('name')}
            onChange={hadleNameChange}
            disabled={isSubmitting}/>

           </FormGroup>

           <FormGroup error = {getErrorMessageByFieldName('email')}>
                <Input
                type="email"
                error = {getErrorMessageByFieldName('email')}
                placeholder="E-mail"
                value={email}
                onChange={handleEmailChange}
                disabled={isSubmitting}/>

            </FormGroup>

           <FormGroup>
            <Input placeholder="Telefone"
            maxLength='15'
            value={phone}
            onChange={handlePhoneChange}
            disabled={isSubmitting}/>

           </FormGroup>

           <FormGroup isLoading = {isLoadingCategories}>
            <Select value={categoryId}
            onChange={(event) => setCategoryId(event.target.value)}
            disabled={isLoadingCategories || isSubmitting}>
                <option value="">Sem categoria</option>
                {categories.map((category)  => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}

            </Select>
           </FormGroup>
           <BuutonContainer>
                <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}
                >
                 {buttonLabel}
                </Button>
           </BuutonContainer>
        </Form>
    );

}
ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
}
