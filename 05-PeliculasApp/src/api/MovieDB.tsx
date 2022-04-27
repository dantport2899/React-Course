import axios from "axios";

const movidedb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'dd998ca0dea9ece499432ab8a782ca68',
        lenguage: 'es-Es'
    }
});

export default movidedb;