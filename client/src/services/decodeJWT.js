import {jwtDecode} from 'jwt-decode';
import { getUserToken } from '../services/authService';

const getUserIdFromToken = () => {
  try {
    const token = getUserToken();
    if (!token) return null;
    const decodedToken = jwtDecode(token);
    return decodedToken.id;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export default getUserIdFromToken;
