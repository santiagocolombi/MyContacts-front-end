import { Overlay, Container, Footer } from "./styles";
import PropTypes from "prop-types";
import Button from "../../Button";
import ReactPortal from "../../Loader/ReactPortal";

export default function Modal({
    danger,
    title,
    children,
    cancelLabel,
    confirmLabel,
    onCancel,
    onConfirm,
    visible,
    isLoading, // Corrigido aqui
}) {
    if (!visible) {
        return null;
    }

    return (
        <ReactPortal containerId="modal-root">
            <Overlay>
                <Container danger={danger}>
                    <h1>{title}</h1>
                    <div className="modal-body">{children}</div>
                    <Footer>
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={onCancel}
                            disabled={isLoading}
                        >
                            {cancelLabel}
                        </button>
                        <Button
                            type="button"
                            danger={danger}
                            onClick={onConfirm}
                            isLoading={isLoading}
                        >
                            {confirmLabel}
                        </Button>
                    </Footer>
                </Container>
            </Overlay>
        </ReactPortal>
    );
}

Modal.propTypes = {
    danger: PropTypes.bool,
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    cancelLabel: PropTypes.string,
    confirmLabel: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    isLoading: PropTypes.bool, // Corrigido aqui
};

Modal.defaultProps = {
    danger: false,
    cancelLabel: "Cancelar",
    confirmLabel: "Confirmar",
    isLoading: false, // Corrigido aqui
};

