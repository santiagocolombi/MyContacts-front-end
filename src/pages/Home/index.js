import { Container, InputSearchContainer, Header, ListHeader, Card, ErrorContainer, EmptyListContainer, SearchNotFoundContainer} from "../Home/styles";
import { Link } from "react-router-dom";
import arrow from '../../assets/images/icons/chevron-up.svg';
import edit from '../../assets/images/icons/🦆 icon _edit_ (1).svg';
import trash from '../../assets/images/icons/trash-2.svg';
import sad from '../../assets/images/icons/sad.svg'
import { useEffect, useState, useMemo,useCallback} from "react";
import Loader from "../../components/Loader";
import ContactsService from "../../services/ContactsService";
import Button from '../../components/Button'
import Box from '../../assets/images/icons/box.svg'
import NothingFound from '../../assets/images/icons/NothingFound.svg'
import Modal from "../../components/PageHeader/Modal";
import toast from "../../utils/toast"





export default function Home() {
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
    return (
        <Container>
            <Loader isLoading={isLoading} />
            <Modal
                visible={isDeleteModalVisible}
                isLoadig={isLoadingDelete}
                danger
                title={`Tem certeza que deseja remover o contato '${contactBeingDeleted?.name}'?`}
                cancelLabel="Cancelar"
                confirmLabel="Deletar"  //!!!! perguntar para o primo o pq de não estar funcionando o default nas props
                onCancel={handleCloseDeleteModal}
                onConfirm={handleConfirmDeleteContact}
                > Essa ação não poderá ser desfeita</Modal>

           {contacts.length > 0 && (
             <InputSearchContainer>
                 <input value={searchTherm} type="text" placeholder="Pesquisar contato"
                 onChange={handleChangeSearchTherm} />
            </InputSearchContainer>
           )}
          <Header justifyContent={(hasError ? 'flex-end' : (
                 contacts.length > 0 ? 'space-between' : 'center'
                ))}>

               {(!hasError && contacts.length > 0) && (
                 <h1>
                    {filteredContacts.length}
                    {filteredContacts.length === 1 ? ' contato' : ' contatos'}
                 </h1>
               )}
                <Link to="/new">Novo Contato</Link>
            </Header>
            {hasError && (<ErrorContainer>
                <img src={sad} alt="Sad" />
                <div className="details">
                   <strong> Ocorreu um erro ao obter os seus contatos!</strong>
                   <Button type="button" onClick={handleTryAgain}>
                    Tentar novamente
                   </Button>
                </div>
            </ErrorContainer>)}
           {!hasError && (
            <>

            {contacts.length < 1 &&  ! isLoading && (
                <EmptyListContainer>
                <img src={Box} alt="box"/>
                <p>
                    Você ainda não tem nenhum contato cadastrado!
                    Clique no botão <strong>"Novo Contato"</strong> à cima para cadastrar
                    o seu primeiro!
                </p>
                </EmptyListContainer>
            )}
                {contacts.length > 0 && filteredContacts.length < 1 && (
                      <SearchNotFoundContainer>
                      <img src={NothingFound} alt="NothingFound"/>
                      <span>
                        Nenhum resultado foi encontrado para<strong>"{searchTherm}"</strong>.
                      </span>
                  </SearchNotFoundContainer>
                )}
             {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
                <button type="button" onClick={handleToggleOrderBy}>
                    <span>Nome</span>
                    <img src={arrow} alt="Arrow" />
                </button>
            </ListHeader>)}
            {filteredContacts.map((contact) => (
                <Card key={contact.id}>
                    <div className="info">
                        <div className="contact-name">
                            <strong>{contact.name}</strong>
                            {contact.category.name && (
                                <small>{contact.category.name}</small>)}
                        </div>
                        <span>{contact.email}</span>
                        <span>{contact.phone}</span>
                    </div>

                    <div className="actions">
                        <Link to={`/edit/${contact.id}`}>
                            <img src={edit} alt="Edit" />
                        </Link>
                        <button
                        type="button" onClick={()=> handleDeleteContact(contact)}>
                            <img src={trash} alt="Delete" />
                        </button>
                    </div>
                </Card>
            ))}
            </>
           )}

        </Container>
    );
}
