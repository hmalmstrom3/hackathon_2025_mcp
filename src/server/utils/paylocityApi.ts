import axios, { InternalAxiosRequestConfig } from 'axios';
import { getPaylocityAccessToken } from './paylocityAuth.js';

// Create an axios instance for Paylocity API requests
export const paylocityApi = axios.create({
  baseURL: 'https://api.paylocity.com/', // Adjust as needed for other Paylocity endpoints
});

// Attach middleware to inject the Bearer token
paylocityApi.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = await getPaylocityAccessToken();
  config.headers = config.headers || {};
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});
