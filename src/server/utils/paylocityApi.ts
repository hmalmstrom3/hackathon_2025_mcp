import axios, { InternalAxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';
import { getPaylocityAccessToken } from './paylocityAuth.js';

dotenv.config();

// Create an axios instance for Paylocity API requests
export const paylocityApi = axios.create({
  baseURL: process.env.PAYLOCITY_API_BASE_URL || 'https://tinprovider.qa.paylocity.com/',
});

// Attach middleware to inject the Bearer token
paylocityApi.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = await getPaylocityAccessToken();
  config.headers = config.headers || {};
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});
