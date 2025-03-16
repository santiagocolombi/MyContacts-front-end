import { Container, Header, ListContainer, Card } from "./styles";

import arrow from '../../../assets/images/icons/chevron-up.svg';
import edit from '../../../assets/images/icons/🦆 icon _edit_ (1).svg';
import trash from '../../../assets/images/icons/trash-2.svg';
export default function ContactsList (){
    return (
    <Container>
        <Header>
            <h1>3 contatos</h1>
            <a href="/">Novo Contato</a>
        </Header>
        <ListContainer>
            <header>
                <button type="button">
                     <span>Nome</span>
                    <img src={arrow}alt="Arrow" />
                </button>
            </header>

            <Card>
                <div className="info">
                    <div className="contact-name">
                        <strong>Sintiago Colombi</strong>
                        <small>instagram</small>
                    </div>
                    <span>santiagocolombi@hotmail.com.br</span>
                    <span>(34) 9999-9999</span>
                </div>

                <div className="actions">
                    <a href="/">
                        <img src={edit} alt="Edit"/>
                    </a>
                    <button type="button">
                    <img src={trash} alt="Delete"/>
                    </button>
                </div>
            </Card>
            <Card>
                <div className="info">
                    <div className="contact-name">
                        <strong>Sintiago Colombi</strong>
                        <small>instagram</small>
                    </div>
                    <span>santiagocolombi@hotmail.com.br</span>
                    <span>(34) 9999-9999</span>
                </div>

                <div className="actions">
                    <a href="/">
                        <img src={edit} alt="Edit"/>
                    </a>
                    <button type="button">
                    <img src={trash} alt="Delete"/>
                    </button>
                </div>
            </Card>
            <Card>
                <div className="info">
                    <div className="contact-name">
                        <strong>Sintiago Colombi</strong>
                        <small>instagram</small>
                    </div>
                    <span>santiagocolombi@hotmail.com.br</span>
                    <span>(34) 9999-9999</span>
                </div>

                <div className="actions">
                    <a href="/">
                        <img src={edit} alt="Edit"/>
                    </a>
                    <button type="button">
                    <img src={trash} alt="Delete"/>
                    </button>
                </div>
            </Card>
        </ListContainer>
    </Container>
        );
}
