import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sendOtp } from '../services/api';
import Notification from '../Components/Notification';
import '../style/style.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState({
    message: '',
    type: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 5000);

      // Clean up the timer if the component is unmounted or notification changes
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email) {
      setNotification({
        message: 'Email is required',
        type: 'error'
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setNotification({
        message: 'Please enter a valid email',
        type: 'error'
      });
      return;
    }

    try {
      const response = await sendOtp(email);
      setNotification({ message: response.message, type: 'success' });

      // Redirect to /otp after 1 second
      setTimeout(() => {
        navigate('/otp');
      }, 1000);
    } catch (error) {
      setNotification({ message: error.message, type: 'error' });
    }
  };

  return (
    <div className="bg-primary h-screen w-screen flex justify-center items-center">
      <div className="bg-secondary p-10">
        <div>
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="formInput"
            /><br />
            <button className="w-64 bg-primary my-2 text-secondary h-10">
              SEND OTP
            </button>
          </form>
          {notification.message && <Notification message={notification.message} type={notification.type} />}
          <div className="text-sm text-center mt-2 text-grey">
            Not registered? <Link to="/signup" className="text-primary">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
