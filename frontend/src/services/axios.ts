//Import tools
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://digievolucion-api.vercel.app/v1/api',
    withCredentials: true
});

// 'Authorization': `Bearer ${localStorage.getItem('user')}`
