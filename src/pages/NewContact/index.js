
import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";
import contactsService from "../../services/ContactsService";
import toast from "../../utils/toast";




export default function NewContact (){
    async function handleSubmit(formData){
        try{
            const contact = {
                name:  formData.name,
                email:  formData.email,
                phone:  formData.phone,
                category_id:  formData.categoryId,

            };

             await contactsService.createContact(contact);

            toast({
                type: 'success',
                text: 'Ocorreu um error ao cadastrar o contato',
                duration: 3000,
            })
        } catch{
            toast({
                type: 'danger',
                text: 'Ocorreu um error ao cadastrar o contato',
            });

        }
    }
    return (
        <>
        <PageHeader title="Novo Contato"/>
        <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit}/>
        </>
    );
}
