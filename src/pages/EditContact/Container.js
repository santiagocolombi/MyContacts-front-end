// A parte de Container vai servir para resolver a lógica do meu componente
// a de Presentation serve para apenas mostrar os componentes para o usuário

import { useParams,  useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import contactsService from "../../services/ContactsService";

import toast from "../../utils/toast"
import useIsMounted from "../../hooks/useIsMounted";
import Presentation from "./Presentation";

export default function Container (){
    const [isLoading, setIsLoading] = useState(true);
    const [contactName, setContactName] =useState('')
    const contactFormRef = useRef(null);

    const {id} = useParams();
    const navigate = useNavigate() //redireciona se o contaco não for encontrado
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
              /* if(IsMounted().current){
                navigate('/');
                toast({
                 type: 'danger',
                 text: 'Contato não encontrado'
                });
              }
            */
            }
        }
        loadContact();
    },[id, navigate, IsMounted])




        async function handleSubmit(contact){
            try{



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
        <Presentation
        isLoading={isLoading}
        contactName={contactName}
        contactFormRef={contactFormRef}
        onSubmit={handleSubmit}/>
    );
}
