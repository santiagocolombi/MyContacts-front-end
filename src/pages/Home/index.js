import { Container, InputSearchContainer, Header, ListHeader, Card, ErrorContainer } from "../Home/styles";
import { Link } from "react-router-dom";
import arrow from '../../assets/images/icons/chevron-up.svg';
import edit from '../../assets/images/icons/🦆 icon _edit_ (1).svg';
import trash from '../../assets/images/icons/trash-2.svg';
import sad from '../../assets/images/icons/sad.svg'
import { useEffect, useState, useMemo, } from "react";
import Loader from "../../components/Loader";
import ContactsService from "../../services/ContactsService";
import Button from '../../components/Button'




export default function Home() {
    const [contacts, setContacts] = useState([])  //conectando a api
    const [orderBy, setOrderBy] = useState('asc')
    const [searchTherm, setSearchTherm] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false);
    const filteredContacts = useMemo(() => {
        return contacts.filter((contact) => (
            contact.name.toLowerCase().includes(searchTherm.toLowerCase()) //para tirar o case sensitive da busca
        ));
    }, [contacts, searchTherm]);


    useEffect(() => {
        async function loadContacts() {
            try {
                setIsLoading(true);
                const contactsList = await ContactsService.listContacts(orderBy);
                setContacts(contactsList);

            } catch {
               setHasError(true);
            } finally {
                setIsLoading(false);
            }

        }
        loadContacts();
    }, [orderBy]);

    function handleToggleOrderBy() {
        setOrderBy(
            (prevState) => (prevState === 'asc' ? 'desc' : 'asc')
        );
    }


    function handleChangeSearchTherm(event) {
        setSearchTherm(event.target.value)
    }

    return (
        <Container>
            <Loader isLoading={isLoading} />
            <InputSearchContainer>
                <input value={searchTherm} type="text" placeholder="Pesquisar contato"
                    onChange={handleChangeSearchTherm} />
            </InputSearchContainer>
            <Header hasError={hasError}>
               {!hasError && (
                 <h1>{filteredContacts.length}
                 {filteredContacts.length === 1 ? ' contato' : ' contatos'}
                 </h1>
               )}
                <Link to="/new">Novo Contato</Link>
            </Header>
            {hasError && (<ErrorContainer>
                <img src={sad} alt="Sad" />
                <div className="details">
                   <strong> Ocorreu um erro ao obter os seus contatos!</strong>
                   <Button type="button">
                    Tentar novamente
                   </Button>
                </div>
            </ErrorContainer>)}
            {filteredContacts.length > 0 && (<ListHeader orderBy={orderBy}>
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
                            {contact.category_name && (<small>{contact.category_name}</small>)}
                        </div>
                        <span>{contact.email}</span>
                        <span>{contact.phone}</span>
                    </div>

                    <div className="actions">
                        <Link to={`/edit/${contact.id}`}>
                            <img src={edit} alt="Edit" />
                        </Link>
                        <button type="button">
                            <img src={trash} alt="Delete" />
                        </button>
                    </div>
                </Card>
            ))}

        </Container>
    );
}
