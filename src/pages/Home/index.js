import { Container, InputSearchContainer, Header, ListContainer, Card } from "../Home/styles";
import { Link } from "react-router-dom";
import arrow from '../../assets/images/icons/chevron-up.svg';
import edit from '../../assets/images/icons/🦆 icon _edit_ (1).svg';
import trash from '../../assets/images/icons/trash-2.svg';
import Modal from "../../components/PageHeader/Modal";

export default function Home() {
  return (
    <Container>
        <Modal></Modal>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
      <Header>
        <h1>3 contatos</h1>
        <Link to="/new">Novo Contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Sintiago Colombi</strong>
              <small>Instagram</small>
            </div>
            <span>santiagocolombi@hotmail.com.br</span>
            <span>(34) 9999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
