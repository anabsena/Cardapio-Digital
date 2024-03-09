import axios from "axios";

export const api = async () => {
    return axios.create({
        baseURL: `http://127.0.0.1:8000/api/`,
        timeout: 12000
    })
} 

