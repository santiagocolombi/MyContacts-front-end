import { useParams,  useNavigate } from "react-router-dom";
import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";
import { useEffect, useRef, useState } from "react";
import contactsService from "../../services/ContactsService";
import Loader from "../../components/Loader";
import toast from "../../utils/toast"
import useIsMounted from "../../hooks/useIsMounted";

export default function EditContact (){
    const [isLoading, setIsLoading] = useState(true);
    const [contactName, setContactName] =useState('')
    const contactFormRef = useRef(null);

    const {id} = useParams();
    const navigate = useNavigate()
    const IsMounted= useIsMounted();

    useEffect(()=> {
        async function loadContact() {
            try{
                const contact = await contactsService.getContactById(id);
                contactFormRef.current.setFieldsValues(contact)
                setIsLoading(false);
                setContactName(contact.name)

                if(IsMounted().current){
                    contactFormRef.current.setFieldsValues(contact);
                    setIsLoading(false);
                    setContactName(contact.name);
                }
            } catch{
              if(IsMounted().current){
                navigate('/');
                toast({
                 type: 'danger',
                 text: 'Contato não encontrado'
                });
              }

            }
        }
        loadContact();
    },[id, navigate, IsMounted])




        async function handleSubmit(formData){
            try{
                const contact = {
                    name:  formData.name,
                    email:  formData.email,
                    phone:  formData.phone,
                    category_id:  formData.categoryId,

                };

                 const updatedContactData = await contactsService.updateContact(id, contact);
                 setContactName(updatedContactData.name);
                toast({
                    type: 'success',
                    text: 'Contato Editado com sucesso',
                    duration: 3000,
                })
            } catch{
                toast({
                    type: 'danger',
                    text: 'Ocorreu um error ao editar o contato',
                });

            }

    }
    return (
        <>
        <Loader isLoading={isLoading}/>
        <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`}/>
        <ContactForm ref={contactFormRef}
         buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}/>
        </>
    );
}
