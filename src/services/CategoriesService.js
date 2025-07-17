import { Card } from "../pages/Home/styles";
import CategoryMapper from "./mappers/CategoryMapper";
import HttpClient from "./utils/HttpClient";

class CategoriesService {
    constructor() {
        this.httpClient = new HttpClient('http://localhost:3000');
    }

  async listCategories() {
        const categories = await this.httpClient.get('/categories');
        return categories.map(CategoryMapper.toDomain)
    }
}

// Corrigido: Renomeando a instância antes de exportar
const categoriesService = new CategoriesService();
export default categoriesService;
