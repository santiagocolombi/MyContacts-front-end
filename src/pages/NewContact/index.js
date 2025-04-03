
import { useRef } from "react";
import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";
import contactsService from "../../services/ContactsService";
import toast from "../../utils/toast";



export default function NewContact (){
    const contactFormRef = useRef(null)
    async function handleSubmit(formData){
        try{
            const contact = {
                name:  formData.name,
                email:  formData.email,
                phone:  formData.phone,
                category_id:  formData.categoryId,

            };

             await contactsService.createContact(contact);

            contactFormRef.current.resetFields(contact)

            toast({
                type: 'success',
                text: 'Contato Cadastrado com sucesso',
                duration: 3000,
            })
        } catch{
            toast({
                type: 'danger',
                text: 'Ocorreu um error ao cadastrar o contato',
            });

        }
    }
    return (
        <>
        <PageHeader title="Novo Contato"/>
        <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit}
        ref={contactFormRef}/>
        </>
    );
}
