import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../Components/Notification";
import { loginUser } from "../services/api.js";
import "../style/style.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [notification, setNotification] = useState({
    message: '',
    type: ''
  });

  const navigate = useNavigate();

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
  
    // Basic validation
    if (!formData.email || !formData.password) {
      setNotification({
        message: 'All fields are required',
        type: 'error'
      });
      return;
    }
  
    try {
      const response = await loginUser(formData);
      setNotification({
        message: response.message || 'Login successful',
        type: 'success'
      });
  
      // Redirect to home page after 1 second
      setTimeout(() => {
        navigate('/');
      }, 1000); // 1000 milliseconds = 1 second
    } catch (error) {
      setNotification({
        message: error.response?.data?.message || 'Login failed',
        type: 'error'
      });
    }
  };

  return (
    <div className="bg-primary h-screen w-screen flex justify-center items-center">
      <div className="bg-secondary p-10">
        <div>
          <form onSubmit={handleSubmit}>
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
            <Link to="/forgotPassword" className="text-xs text-primary">Forgot Password?</Link>
            <br />
            <button type="submit" className="w-64 bg-primary my-2 text-secondary h-10">
              LOGIN
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
