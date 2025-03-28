import { Container } from "./styles";
import PropTypes from "prop-types";
import Spinner from "../Spinner";
import Loader from "../Loader";

export default function FormGroup({children, error, isLoading}){
    return (
        <Container>

            <div className="form-item">
            {children}

            {isLoading && <div className="loader"><Spinner/></div>}
            </div>
           {error && <small>{error}</small>}
        </Container>
    );
}

FormGroup.propTypes= {
    children: PropTypes.node.isRequired,
    error: PropTypes.string,
    isLoading: PropTypes.bool,
}

FormGroup.defaultProps = {
    error: null,
    isLoading: false,
}
