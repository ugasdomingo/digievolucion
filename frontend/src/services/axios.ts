//Import tools
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3005/v1/api',
    withCredentials: true
});

// 'Authorization': `Bearer ${localStorage.getItem('user')}`
