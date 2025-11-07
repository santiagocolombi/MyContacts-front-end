
    import ContactForm from "../../components/ContactForm";
    import PageHeader from "../../components/PageHeader";
    import Loader from "../../components/Loader";
    import useEditContact from "./useEditContact";

    export default function EditContact(){
        const {
            isLoading,
            contactName,
            contactFormRef,
            handleSubmit,
        } = useEditContact(); //hook custom hook para separar alógica do visual do componente
        return (
            <>
            <Loader isLoading={isLoading}/>
            <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`}/>
            <ContactForm ref={contactFormRef} //é oque faz os dados do editar ficarem no formulário
            buttonLabel="Salvar alterações"
            onSubmit={handleSubmit}/>
            </>
        );
    }


