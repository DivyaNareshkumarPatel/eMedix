import axios from 'axios';
import { setUserToken } from './authService';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const requestEmailVerification = async (userData) => {
  const response = await api.post('/api/users/request-verification', userData);
  return response.data;
};

export const verifyEmail = async (token) => {
  const response = await api.get(`/api/users/verify/${token}`);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await api.post('/api/users/login', data);
  const { token } = response.data;

  setUserToken(token);

  return response.data;
};

export const sendOtp = async (email) => {
  try {
    const response = await axios.post(`/api/users/forgotPassword`, { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const verifyOtp = async ({ email, otp }) => {
  try {
    const response = await axios.post(`/api/users/verifyOtp`, { email, otp });
    return response.data;
  } catch (error) {
    // Extract error message
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error('An error occurred');
  }
};

export const resetPassword = async ({ email, newPassword }) => {
  try {
    const response = await api.post('/api/users/resetPassword', { email, newPassword });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'An error occurred');
  }
};

export const adminLogin = async (email, password) => {
  try {
    const response = await api.post('/api/admin/adminlogin', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};