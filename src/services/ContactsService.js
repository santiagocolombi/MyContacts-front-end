import HttpClient from "./utils/HttpClient";

class ContactsService {
    constructor() {
        this.httpClient = new HttpClient('http://localhost:3000');
    }

    async listContacts(orderBy = 'asc') {
        return this.httpClient.get(`/contacts/34ffd961-29de-4914-b6cb-428cf5007651?orderBy=${orderBy}`);
    }
}

// atribuindo a uma variável antes de exportar
const contactsService = new ContactsService();
export default contactsService;
