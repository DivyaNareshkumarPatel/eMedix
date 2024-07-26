import React from 'react';
import { Link } from 'react-router-dom';

export default function PatientRequestRejected() {
  return (
    <div style={{ padding: '2.5rem', color: '#404040', fontFamily: 'Arial, sans-serif' }}>
      <div>
      <div style={{ color: '#4200FF', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
          Request Rejected
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0.5rem',
              backgroundColor: '#EDF2FB',
              padding: '1rem',
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ color: '#A7A7A7', fontSize: '1rem', fontWeight: '400', borderBottom: '2px solid #DEDEDE' }}>
                  <th style={{ padding: '0.5rem', fontWeight: '400' }}>Doctor</th>
                  <th style={{ padding: '0.5rem', fontWeight: '400' }}>Reason</th>
                  <th style={{ padding: '0.5rem' }}></th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#F7F7F7',
                      height: '2.5rem',
                      borderBottom: '1px solid #DEDEDE',
                      textAlign: 'center',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F0F4F8')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#F7F7F7')}
                  >
                    <td style={{ padding: '0.5rem' }}>Dr. XYZ</td>
                    <td style={{ padding: '0.5rem' }}>Busy</td>
                    <td style={{ padding: '0.5rem' }}>
                      <Link to="/doctorProfile" style={{ color: '#4200FF', textDecoration: 'none', fontWeight: 'bold' }}>
                        Doctor Profile
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
