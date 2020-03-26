import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', //Url padrão que sempre está presente.
});

export default api;