import { jwtDecode } from 'jwt-decode';


export function isTokenExpired() {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return true; 
  }

  try {
    const decodedToken = jwtDecode(token);  
    const expirationTime = decodedToken.exp * 1000; 
    const currentTime = Date.now(); 

    return expirationTime < currentTime;  
  } catch (error) {
    return true;  
  }
}
