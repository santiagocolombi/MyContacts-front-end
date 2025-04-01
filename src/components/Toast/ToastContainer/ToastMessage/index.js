import { Container } from "./styles";
import PropTypes from "prop-types";

import x from "../../../../assets/images/icons/x.svg"
import correct from "../../../../assets/images/icons/check-circle.svg"
import { useEffect } from "react";


export default function ToastMessage({message, onRemoveMessage}){
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('executou')
            onRemoveMessage(message.id)
        }, message.duration || 7000);

        return() => {
            clearTimeout(timeoutId);
        }
    },[message,onRemoveMessage]);

    function handleRemoveToast(){
       onRemoveMessage(message.id);
    }
    //// esse tabIndex serve para acessibilidade para o tab chegar no meu toast
    return (
        <Container type={message.type}
        onClick={handleRemoveToast}
        tabIndex={0}
        role="button">
            {message.type === 'danger' && <img src={x} alt="X"/>}
            {message.type === 'success' && <img src={correct} alt="correct"/>}
           <strong>{message.text}</strong>
        </Container>
    )
}
ToastMessage.propTypes={

    onRemoveMessage: PropTypes.func.isRequired,

    message:PropTypes.shape({text: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['default','success', 'danger']),
        duration:PropTypes.number,
        id: PropTypes.number.isRequired,}).isRequired

}


