// src/utils/api.js
import { useNavigate } from 'react-router-dom';

// src/utils/api.js
export const handleFetch = async (url, options, navigate) => {
  try {
    const response = await fetch(url, options);

    if (response.status === 401) {
      // Token is invalid or expired, redirect to login
      localStorage.removeItem('authToken');
      localStorage.removeItem('userName');
      navigate('/login'); // Use the passed-in navigate function
      throw new Error('Session expired, please log in again.');
    }

    return response;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};
