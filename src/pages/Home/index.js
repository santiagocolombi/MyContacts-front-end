import { Container, InputSearchContainer, Header, ListHeader, Card } from "../Home/styles";
import { Link } from "react-router-dom";
import arrow from '../../assets/images/icons/chevron-up.svg';
import edit from '../../assets/images/icons/🦆 icon _edit_ (1).svg';
import trash from '../../assets/images/icons/trash-2.svg';
import { useEffect, useState } from "react";



export default function Home() {
    const [contacts, setContacts] = useState([])  //conectando a api
    const [orderBy, setOrderBy] = useState('asc')
    const [searchTherm, setSearchTherm] = useState('')

    const filteredContacts = contacts.filter((contact) => (
        contact.name.toLowerCase().includes(searchTherm.toLowerCase()) //para tirar o case sensitive da busca
    ));

    useEffect(() => {
        fetch(`http://localhost:3000/contacts?orderBy=${orderBy}`)
        .then(async(response) => {
            const json = await response.json();
            setContacts(json);


        })
        .catch((error) => {
            console.log('erro', error)
        });

    },[orderBy]);

    function handleToggleOrderBy(){
        setOrderBy(
            (prevState) => (prevState === 'asc' ? 'desc' : 'asc')
        );
    }


    function handleChangeSearchTherm(event){
        setSearchTherm(event.target.value)
    }

  return (
    <Container>

      <InputSearchContainer>
        <input value={searchTherm} type="text" placeholder="Pesquisar contato"
        onChange={handleChangeSearchTherm}/>
      </InputSearchContainer>
      <Header>
        <h1>{filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato': ' contatos'}</h1>
        <Link to="/new">Novo Contato</Link>
      </Header>
      <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>
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
