import { useEffect, useState, useMemo,useCallback} from "react";
import ContactsService from "../../services/ContactsService";
import toast from "../../utils/toast"
export default function useHome(){
     const [contacts, setContacts] = useState([])  //conectando a api
    const [orderBy, setOrderBy] = useState('asc')
    const [searchTherm, setSearchTherm] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [contactBeingDeleted, setContactBeingDeleted] = useState(null)
    const [isLoadingDelete, setIsLoadingDelete] = useState(false)

    const filteredContacts = useMemo(() => {
        return contacts.filter((contact) => (
            contact.name.toLowerCase().includes(searchTherm.toLowerCase()) //para tirar o case sensitive da busca
        ));
    }, [contacts, searchTherm]);


  const loadContacts = useCallback( async () => {
    try {
        setIsLoading(true);
       const contactsList =  await  ContactsService.listContacts(orderBy);

        setHasError(false)
        setContacts(contactsList);

    } catch {
       setHasError(true);
    } finally {
        setIsLoading(false);
    }

}, [orderBy])


    useEffect(() => {
        loadContacts();
    }, [ loadContacts]);

    function handleToggleOrderBy() {
        setOrderBy(
            (prevState) => (prevState === 'asc' ? 'desc' : 'asc')
        );
    }


    function handleChangeSearchTherm(event) {
        setSearchTherm(event.target.value)   //para a barra de busca
    }

    function handleTryAgain(){
        loadContacts();
    }
    function handleDeleteContact(contact){
        setContactBeingDeleted(contact)
        setIsDeleteModalVisible(true); //faz apaarecer o modal de deletar
    }
    function handleCloseDeleteModal(){
        setIsDeleteModalVisible(false); //para fechar o modal
        setContactBeingDeleted(null)
    }
    async function handleConfirmDeleteContact(){
        try{
            setIsLoadingDelete(true);
            await ContactsService.deleteContact(contactBeingDeleted.id);
            setContacts((prevState) => prevState.filter(
                (contact) => contact.id !== contactBeingDeleted.id,
            ));
            handleCloseDeleteModal();
            toast({
                type: 'success',
                text: 'Contato deletado'
            });

        } catch{
            toast({
                type: 'danger',
                text: 'Ocorreu um erro ao deletar o contato!'
            });

        } finally{
            setIsLoadingDelete(false);
        }
    }
    return  {
isLoading,
isDeleteModalVisible,
isLoadingDelete,
contactBeingDeleted,
handleCloseDeleteModal,
handleConfirmDeleteContact,
contacts,
searchTherm,
handleChangeSearchTherm,
hasError,
handleTryAgain,
filteredContacts,
orderBy,
handleToggleOrderBy,
handleDeleteContact,}
}
