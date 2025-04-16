
import axios from "axios";

const BASE_URL = "https://jig964lxbc.execute-api.us-west-2.amazonaws.com/Prod";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
});

// Add request interceptor to handle CORS preflight
api.interceptors.request.use((config) => {
  // Remove client-side CORS headers - let the server handle them
  delete config.headers['Access-Control-Allow-Origin'];
  delete config.headers['Access-Control-Allow-Methods'];
  return config;
});

export const getReminders = () => api.get('/reminders');
export const createReminder = (data) => api.post('/reminders', data);
export const updateReminder = (id, data) => api.put(`/reminders/${id}`, data);
export const deleteReminder = (id) => api.delete(`/reminders/${id}`);