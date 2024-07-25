// components/CreatePassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/api';
import Notification from '../Components/Notification';
import "../style/style.css";

export default function CreatePassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setNotification({ message: 'Passwords do not match', type: 'error' });
      return;
    }

    try {
      const response = await resetPassword({ email, newPassword });

      if (response.message === 'Password reset successful') {
        setNotification({ message: 'Password reset successful', type: 'success' });
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      }
    } catch (error) {
      setNotification({ message: error.message || 'An error occurred', type: 'error' });
    }
  };

  return (
    <div className="bg-primary h-screen w-screen flex justify-center items-center">
      <div className="bg-secondary p-10">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="formInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          <input
            type="password"
            placeholder="New Password"
            className="formInput"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          /><br />
          <input
            type="password"
            placeholder="Confirm Password"
            className="formInput"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          /><br />
          <button type="submit" className="w-64 bg-primary my-2 text-secondary h-10">
            CHANGE PASSWORD
          </button>
        </form>
        {notification.message && (
          <Notification message={notification.message} type={notification.type} />
        )}
      </div>
    </div>
  );
}
