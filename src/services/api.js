import axios from 'axios';
const Api = axios.create({baseURL: 'https://acesso7-notes-api.herokuapp.com'});

export default Api;