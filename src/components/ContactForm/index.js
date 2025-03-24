import FormGroup from "../FormGroup";
import { Form, BuutonContainer } from "./styles";
import Input from '../input'
import Select from '../Select';
import Button from '../Button';
import PropTypes from "prop-types";
import { useState} from "react";
import isEmailValid from "../../utils/isEmailValid";
import useErrors from "../../hooks/useErrors";
import formatPhone from "../../utils/formatPhone";


export default  function ContactForm({buttonLabel}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState(''); //controlled component
    const {setError, removeError, getErrorMessageByFieldName, errors,} = useErrors();
    const isFormValid = (name && errors.length === 0 );




    function hadleNameChange(event) {
        setName(event.target.value);

        if(!event.target.value){
           setError({field:'name', message: 'Nome é obrigatório.'})
        } else {
            removeError('name');
    }
}

    function handleEmailChange(event){
        setEmail(event.target.value);

        if(event.target.value && !isEmailValid(event.target.value)){
            setError({field:'email', message: 'E-mail inválido.'})

        } else{
                removeError('email');
        }

    }
    function handlePhoneChange(event){
        setPhone(formatPhone(event.target.value));
    }

    function handleSubmit(event){
        event.preventDefault();
    }
    console.log(getErrorMessageByFieldName('name'))
    return (
        <Form onSubmit={handleSubmit} noValidate>
           <FormGroup error = {getErrorMessageByFieldName('name')}>
            <Input value={name} placeholder="Nome *"
            error = {getErrorMessageByFieldName('name')}
            onChange={hadleNameChange}/>
           </FormGroup>

           <FormGroup error = {getErrorMessageByFieldName('email')}>
                <Input
                type="email"
                error = {getErrorMessageByFieldName('email')}
                placeholder="E-mail"
                value={email}
                onChange={handleEmailChange}/>
            </FormGroup>

           <FormGroup>
            <Input placeholder="Telefone"
            maxLength='15'
            value={phone}
            onChange={handlePhoneChange}/>
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
                <Button type="submit" disabled={!isFormValid}>
                 {buttonLabel}
                </Button>
           </BuutonContainer>
        </Form>
    );

}
ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
}
