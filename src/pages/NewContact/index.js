
import { useRef } from "react";
import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";
import contactsService from "../../services/ContactsService";
import toast from "../../utils/toast";
import ContactMapper from "../../services/mappers/ContactMapper";



export default function NewContact (){
    const contactFormRef = useRef(null) //como o componente ainda não foi criado, o valor é null
    async function handleSubmit(contact){
        try{


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
