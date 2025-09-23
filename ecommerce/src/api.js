import axios from 'axios';

const api = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

const token = localStorage.getItem('authToken');

if (token) {
  api.defaults.headers.common['Authorization'] = token;
}

export default api;
