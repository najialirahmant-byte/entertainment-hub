import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Content API calls
export const getMovies = () => api.get('/content/movies');
export const getShows = () => api.get('/content/shows');
export const searchContent = (query) => api.get(`/content/search?q=${query}`);
export const getContentDetails = (id) => api.get(`/content/${id}`);

// Auth API calls
export const register = (userData) => api.post('/auth/register', userData);
export const login = (credentials) => api.post('/auth/login', credentials);
export const logout = () => api.post('/auth/logout');

// User API calls
export const getUserProfile = () => api.get('/user/profile');
export const addToWatchlist = (contentId) => api.post('/user/watchlist', { contentId });
export const getWatchlist = () => api.get('/user/watchlist');
export const rateContent = (contentId, rating, review) => 
  api.post('/user/ratings', { contentId, rating, review });

export default api;
