export const getUserToken = () => {
    return localStorage.getItem("userToken");
  };
  
  export const setUserToken = (token) => {
    localStorage.setItem("userToken", token);
  };
  
  export const clearUserToken = () => {
    localStorage.removeItem("userToken");
  };