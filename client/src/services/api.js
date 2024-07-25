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

export const fetchUsers = async () => {
  try {
    const response = await api.get('/api/users/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
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

export const addHospital = async (formData) => {
  try {
    const response = await api.post('/api/hospitals/hospitalData', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchHospitals = async () => {
  try {
    const response = await api.get('/api/hospitals');
    return response.data.hospitals;
  } catch (error) {
    throw error;
  }
};

export const updateHospital = async (id, formData) => {
  try {
    const response = await api.put(`/api/hospitals/${id}`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteHospital = async (id) => {
  try {
    const response = await api.delete(`/api/hospitals/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addDoctor = async (doctorData) => {
  try {
    const response = await axios.post('/api/doctors/add', doctorData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error adding doctor:', error);
    throw error;
  }
};

export const fetchDoctors = async () => {
  const response = await api.get('/api/doctors');
  return response.data.data; // Ensure you're returning the correct data format
};

// Other existing functions
export const updateDoctor = async (id, doctorData) => {
  const response = await api.put(`/api/doctors/update/${id}`, doctorData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const deleteDoctor = async (id) => {
  const response = await api.delete(`/api/doctors/delete/${id}`);
  return response.data;
};