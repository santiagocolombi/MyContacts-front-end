import { Link } from "react-router-dom";
import arrow from "../../assets/images/icons/chevron-up.svg"
import { Container } from "./style";
import PropTypes from "prop-types";
export default function PageHeader({title}){
    return (
    <Container>
        <Link to="/"><img src={arrow} alt="Back" />
        <span>Voltar</span>
        </Link>
        <h1>{title}</h1>
    </Container>
);
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired
};
