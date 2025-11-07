import { useParams,  useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import contactsService from "../../services/ContactsService";

import toast from "../../utils/toast"
import useIsMounted from "../../hooks/useIsMounted";

export default function useEditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const isMounted = useIsMounted();

  useEffect(() => {
  async function loadContact() {
    try {
      const contact = await contactsService.getContactById(id);

      // só atualiza se o componente estiver montado
      if (isMounted.current) {
        // só seta os campos se o ref existir
        if (contactFormRef.current) {
          contactFormRef.current.setFieldsValues(contact);
        }

        setContactName(contact.name);
        setIsLoading(false);
      }
    } catch {
      if (isMounted.current) {
        navigate('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado',
        });
      }
    }
  }

  loadContact();
}, [id, navigate, isMounted]);
  async function handleSubmit(contact) {
    try {
      const updatedContactData = await contactsService.updateContact(id, contact);

      setContactName(updatedContactData.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso',
        duration: 3000,
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato',
      });
    }
  }


  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit, // cuidado com o nome: no componente você tinha "handleSunmit" (typo)
  };
}

