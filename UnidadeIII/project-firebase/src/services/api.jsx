import axios from "axios";//axios é uma biblioteca JavaScript para fazer requisições HTTP (chamadas para APIs).
const api = axios.create({//cria uma instancia do axios chamada api
    baseURL: "http://localhost:4000"
});
export default api;
//biblioteca Axios no JavaScript para realizar requisições HTTP corretamente 