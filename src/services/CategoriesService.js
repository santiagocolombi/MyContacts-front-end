import HttpClient from "./utils/HttpClient";

class CategoriesService {
    constructor() {
        this.httpClient = new HttpClient('http://localhost:3000');
    }

   listCategories() {
        return this.httpClient.get('/categories');
    }
}

// Corrigido: Renomeando a instância antes de exportar
const categoriesService = new CategoriesService();
export default categoriesService;
