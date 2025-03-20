import FormGroup from "../FormGroup";
import { Form, BuutonContainer } from "./styles";
import Input from '../input'
import Select from '../Select';
import Button from '../Button';
import PropTypes, { func } from "prop-types";
import { use, useState} from "react";
import isEmailValid from "../../utils/isEmailValid";


export default  function ContactForm({buttonLabel}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState(''); //controlled component
    const [errors, setErrors] = useState([]);




    function hadleNameChange(event) {
        setName(event.target.value);

        if(!event.target.value){
            setErrors((prevState) => [
                ...prevState,
                {field: 'name', message: 'Nome é obrigatório'},


            ]);
        } else {
            setErrors((prevState) => prevState.filter(
                (error) => error.field !== 'name',

            ));
        }
    }

    function handleEmailChange(event){
        setEmail(event.target.value);

        if(event.target.value && !isEmailValid(event.target.value)){
            const errorAlreadyExists = errors.find((error) => error.field === 'email' );
            if(errorAlreadyExists){
                return;
            }
            setErrors((prevState) => [
                ...prevState,
                {field: 'email', message: 'E-mail inválido'},


            ]);

        } else{
            setErrors((prevState) => prevState.filter(
                (error) => error.field !== 'email',

            ));
        }

    }
    function getErrorMessageByFieldName(fieldName){
        return errors.find((error) => (error) => error.field === fieldName)?.message;
    }
    function handleSubmit(event){
        event.preventDefault();
    }
    console.log(getErrorMessageByFieldName('name'))
    return (
        <Form onSubmit={handleSubmit}>
           <FormGroup error = {getErrorMessageByFieldName('name')}>
            <Input value={name} placeholder="Nome"
            error = {getErrorMessageByFieldName('name')}
            onChange={hadleNameChange}/>
           </FormGroup>

           <FormGroup error = {getErrorMessageByFieldName('email')}>
                <Input
                error = {getErrorMessageByFieldName('email')}
                placeholder="E-mail"
                value={email}
                onChange={handleEmailChange}/>
            </FormGroup>

           <FormGroup>
            <Input placeholder="Telefone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}/>
           </FormGroup>

           <FormGroup>
            <Select value={category}
            onChange={(event) => setCategory(event.target.value)}>
                <option value="">Categoria</option>
                <option value="instagram">Instagram</option>
                <option value="discord">Discord</option>
            </Select>
           </FormGroup>
           <BuutonContainer>
                <Button type="submit">
                 {buttonLabel}
                </Button>
           </BuutonContainer>
        </Form>
    );

}
ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
};
