import { Overlay } from "./styles";
import PropTypes from "prop-types";
import Spinner from "../Spinner";
import ReactPortal from "./ReactPortal";
export default function Loader({ isLoading }) {
    if (!isLoading) {
        return null;
    }



    if (!isLoading) {
       return null;
    }

    return (
        <ReactPortal containerId='loader-root'>
            <Overlay>
            <Spinner />
        </Overlay>
        </ReactPortal>
    )
}

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};
