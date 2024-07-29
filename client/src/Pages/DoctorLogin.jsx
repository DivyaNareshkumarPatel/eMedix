import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginDoctor } from '../services/api';
import { setUserToken} from '../services/authService';

export default function DoctorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await loginDoctor(email, password);

      if (response.success) {
        localStorage.setItem('doctorToken', response.token);
        setUserToken(response.token, 'doctorToken');
        navigate('/doctor-acc');
      } else {
        setError(response.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <h1 style={styles.loginTitle}>Doctor Login</h1>
        {error && <p style={styles.errorMessage}>{error}</p>}
        <form onSubmit={handleLogin} style={styles.loginForm}>
          <div style={styles.formGroup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.formInput}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.formInput}
              required
            />
          </div>
          <button
            type="submit"
            style={{ ...styles.loginButton, ...(loading ? styles.loadingButton : {}) }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    backgroundColor: '#edf2fb',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBox: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '100%',
    maxWidth: '400px'
  },
  loginTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4200ff',
    marginBottom: '20px',
    textAlign: 'center'
  },
  errorMessage: {
    color: '#ea4335',
    textAlign: 'center',
    marginBottom: '15px'
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '15px'
  },
  formInput: {
    width: '100%',
    padding: '10px',
    border: "1px solid '#a7a7a7'",
    borderRadius: '4px',
    fontSize: '16px'
  },
  loginButton: {
    backgroundColor: '#4200ff',
    color: '#ffffff',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  loadingButton: {
    backgroundColor: '#a7a7a7',
    cursor: 'not-allowed'
  }
};
