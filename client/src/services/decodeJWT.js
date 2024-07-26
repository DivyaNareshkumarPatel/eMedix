import { jwtDecode } from 'jwt-decode'; // Use named import

const getUserIdFromToken = () => {
  const token = localStorage.getItem('token'); // Adjust according to your token storage method
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken.id; // Adjust according to your token structure
  }
  return null;
};

export default getUserIdFromToken;
