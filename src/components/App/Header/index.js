import { Container,InputSearchContainer } from "../styles";
import logo from '../../../assets/images/MyContacts.svg'

export  function Header(){
    return (
        <Container>
            <img src={logo} alt="mycontacts" width="201"/>
            <InputSearchContainer>
            <input type="text" placeholder="Pesqusar contato"/>
            </InputSearchContainer>
        </Container>
    );
}
