import contactsService from "../../services/ContactsService";
import toast from "../../utils/toast";
import { useRef } from "react";
export default function useNewContact(){
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
    return {
        handleSubmit,
        contactFormRef,
    }
}
