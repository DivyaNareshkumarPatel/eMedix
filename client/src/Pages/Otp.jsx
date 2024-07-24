import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyOtp } from '../services/api';
import Notification from '../Components/Notification';
import '../style/style.css';

export default function Otp() {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp || !email) {
      setNotification({ message: 'OTP and email are required', type: 'error' });
      return;
    }

    try {
      const response = await verifyOtp({ email, otp });
      setNotification({ message: response.message, type: 'success' });

      // Redirect to login after 1 second
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      setNotification({ message: error.message || 'An error occurred', type: 'error' });
    }
  };

  return (
    <div className="bg-primary h-screen w-screen flex justify-center items-center">
      <div className="bg-secondary p-10">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="formInput"
            /><br />
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="formInput"
            /><br />
            <button type="submit" className="w-64 bg-primary my-2 text-secondary h-10">
              Verify
            </button>
          </form>
          {notification.message && <Notification message={notification.message} type={notification.type} />}
        </div>
      </div>
    </div>
  );
}
