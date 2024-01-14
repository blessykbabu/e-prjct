
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const token = localStorage.getItem('token');
        // console.log('Token before removal:', token);
        const response = await axios.post(
          'http://localhost:3000/logout',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Check if the logout was successful
        if (response.status === 200) {
          // Perform any additional actions on successful logout
          console.log('Logout successful');
          localStorage.removeItem('token');
          console.log('Token after removal:', localStorage.getItem('token'));
          navigate('/');
        } else {
          // Handle the case where logout was not successful
          console.error('Logout failed:', response.data.message);
        }
      } catch (error) {
        console.error('Error during logout:', error.message);
      }
    };

    // Call the logout function when the component mounts
    handleLogout();
  }, [navigate]); // Include navigate in the dependencies array if it's used inside the effect
  useEffect(() => {
    const handleBeforeUnload = () => {
      history.replaceState(null, document.title, window.location.href);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return <div>Logging out...</div>; // You can render something while the logout is in progress
}
