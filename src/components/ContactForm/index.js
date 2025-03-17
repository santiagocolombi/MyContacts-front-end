import FormGroup from "../FormGroup";
import { Form, BuutonContainer } from "./styles";
import Input from '../input'
import Select from '../Select';
import Button from '../Button';
import PropTypes from "prop-types";


export default  function ContactForm({buttonLabel}){
    return (
        <Form>
           <FormGroup>
            <Input placeholder="Nome"/>
           </FormGroup>

           <FormGroup error="O formato do E-mail é inválido">
                <Input placeholder="E-mail" error />
            </FormGroup>

           <FormGroup>
            <Input placeholder="Telefone"/>
           </FormGroup>

           <FormGroup>
            <Select>
                <option value="instagram">Instagram</option>
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
