//minha chave : a325282cc34e75a416a53587fc529da53d4f7937
import axios from 'axios';

export const key ="a325282cc34e75a416a53587fc529da53d4f7937";

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;