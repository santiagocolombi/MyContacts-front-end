
import HttpClient from "./utils/HttpClient";

class ContactsService {
    constructor() {
        this.httpClient = new HttpClient('http://localhost:3000');
    }

     listContacts(orderBy = 'asc') {
        return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
    }
      getContactById(id){

        return this.httpClient.get(`/contacts/${id}`);
    }
     createContact(contact){
       return  this.httpClient.post('/contacts', {
        body:contact,});
    }
    updateContact(id, contact){
        return this.httpClient.put(`/contacts/${id}`, {body: contact})
    }
    deleteContact(id){
        return this.httpClient.delete(`/contacts/${id}`);
    }
}

// atribuindo a uma variável antes de exportar
const contactsService = new ContactsService();
export default contactsService;
