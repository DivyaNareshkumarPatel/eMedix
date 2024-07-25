import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api'; // Adjust the import based on your file structure
import '../style/userSection.css';

export default function UserSection() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        if (response.success) {
          setUsers(response.data);
        } else {
          setError('Failed to load users.');
        }
      } catch (error) {
        setError('An error occurred while fetching users.');
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="user-section">
      <h1>User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
