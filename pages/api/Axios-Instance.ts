import axios from 'axios'

export const axiosInstance = axios.create({
    // @ts-ignore
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    headers: {
    }
});
