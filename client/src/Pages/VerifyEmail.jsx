import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/verification.css';

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('Verifying your email...');
  const [error, setError] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/verify/${token}`);
        
        if (response.status === 200) {
          setMessage('Email verified successfully. Redirecting to home...');
          setTimeout(() => {
            navigate(response.data.redirectUrl); // Use navigate for redirection
          }, 2000);
        } else {
          throw new Error('Unexpected response');
        }
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'An error occurred.';
        setMessage('Verification failed. Redirecting to signup page...');
        setError(errorMessage);
        setTimeout(() => {
          navigate('/signup'); // Use navigate for redirection
        }, 2000);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="verification-page">
      <h1>{message}</h1>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default VerifyEmail;
