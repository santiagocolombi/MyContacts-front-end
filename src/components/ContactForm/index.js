import FormGroup from "../FormGroup";
import { Form, BuutonContainer } from "./styles";
import Input from '../input'
import Select from '../Select';
import Button from '../Button';
import PropTypes from "prop-types";
import { forwardRef} from "react";

import useContacForm from "./useContactForm";
//Contactform, NewContact, EditContact , entender eles com uso de setFields, useImperativeHandle, IsMounted ...
const ContactForm  = forwardRef(({buttonLabel, onSubmit, }, ref ) => {
    const {
handleSubmit,
getErrorMessageByFieldName,
name,
hadleNameChange,
isSubmitting,
email,
phone,
handlePhoneChange,
isLoadingCategories,
categoryId,
categories,
isFormValid,
setCategoryId,
handleEmailChange
} = useContacForm(onSubmit, ref);
    console.log(getErrorMessageByFieldName('name'))
    return (
        <Form onSubmit={handleSubmit} noValidate>
           <FormGroup error = {getErrorMessageByFieldName('name')}>
            <Input value={name} placeholder="Nome *"
            error = {getErrorMessageByFieldName('name')}
            onChange={hadleNameChange}
            disabled={isSubmitting}/>

           </FormGroup>

           <FormGroup error = {getErrorMessageByFieldName('email')}>
                <Input
                type="email"
                error = {getErrorMessageByFieldName('email')}
                placeholder="E-mail"
                value={email}
                onChange={handleEmailChange}
                disabled={isSubmitting}/>

            </FormGroup>

           <FormGroup>
            <Input placeholder="Telefone"
            maxLength='15'
            value={phone}
            onChange={handlePhoneChange}
            disabled={isSubmitting}/>

           </FormGroup>

           <FormGroup isLoading = {isLoadingCategories}>
            <Select value={categoryId}
            onChange={(event) => setCategoryId(event.target.value)}
            disabled={isLoadingCategories || isSubmitting}>
                <option value="">Sem categoria</option>
                {categories.map((category)  => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}

            </Select>
           </FormGroup>
           <BuutonContainer>
                <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}
                >
                 {buttonLabel}
                </Button>
           </BuutonContainer>
        </Form>
    );

});


ContactForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;
