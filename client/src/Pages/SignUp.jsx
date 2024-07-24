import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Notification from '../Components/Notification';
import { requestEmailVerification } from '../services/api.js';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [notification, setNotification] = useState({
    message: '',
    type: ''
  });

  // Clear notification after 5 seconds
  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 5000);

      // Clean up the timer if the component is unmounted or notification changes
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validations
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setNotification({
        message: 'All fields are required',
        type: 'error'
      });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setNotification({
        message: 'Passwords do not match',
        type: 'error'
      });
      return;
    }
    if (formData.password.length < 6) {
      setNotification({
        message: 'Password must be at least 6 characters long',
        type: 'error'
      });
      return;
    }
    if (!validateEmail(formData.email)) {
      setNotification({
        message: 'Invalid email format',
        type: 'error'
      });
      return;
    }

    try {
      const response = await requestEmailVerification(formData);
      setNotification({
        message: response.message || 'Verification email sent, please check your inbox',
        type: 'success'
      });
    } catch (error) {
      setNotification({
        message: error.response.data.message || 'Error occurred',
        type: 'error'
      });
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="bg-primary h-screen w-screen flex justify-center items-center">
      <div className="bg-secondary p-10">
        <div>
          <form onSubmit={handleSubmit} noValidate>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formData.name} 
              onChange={handleChange} 
              className="formInput" 
            />
            <br />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={handleChange} 
              className="formInput" 
            />
            <br />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange} 
              className="formInput" 
            />
            <br />
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              className="formInput" 
            />
            <br />
            <button type="submit" className="w-64 bg-primary my-2 text-secondary h-10">
              SIGNUP
            </button>
          </form>
          {notification.message && <Notification message={notification.message} type={notification.type} />}
          <div className="text-sm text-center mt-2 text-grey">
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
