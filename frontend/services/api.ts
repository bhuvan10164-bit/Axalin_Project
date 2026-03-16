import axios from 'axios';

const api = axios.create({ baseURL: 'https://axalin-project.onrender.com/api' });

export const fetchProducts = () => api.get('/products/');
export const fetchProduct = (id: number) => api.get(`/products/${id}/`);
