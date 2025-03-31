import { Container } from "./styles";
import PropTypes from "prop-types";

import x from "../../../../assets/images/icons/x.svg"
import correct from "../../../../assets/images/icons/check-circle.svg"


export default function ToastMessage({text, type}){
    return (
        <Container type={type}>
            {type === 'danger' && <img src={x} alt="X"/>}
            {type === 'success' && <img src={correct} alt="correct"/>}
           <strong>{text}</strong>
        </Container>
    )
}
ToastMessage.propTypes={
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default','success', 'danger']),

}

ToastMessage.defaultProps = {
    type: 'default',
};
