export default class APIError extends Error{
    constructor(response, body){
        super( ); // Erro.constructor
        this.name  = 'APIError';
        this.response = response;
        this.body = body
        this.message = body?.error || `${response.status} - ${response.statusText}`
    }
}

