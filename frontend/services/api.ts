import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8000/api' });

export const fetchProducts   = () => api.get('/products/');
export const fetchProduct    = (id: number) => api.get(`/products/${id}/`);
