import React from "react";
import { Link } from "react-router-dom";

export default function PatientAppReq() {
  return (
    <div style={{ padding: '2.5rem', color: '#404040', fontFamily: 'Arial, sans-serif' }}>
      <div className="mb-8">
        <div style={{ color: '#4200FF', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
          Appointment Request Sent
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '1rem',
            backgroundColor: '#EDF2FB',
            padding: '2rem',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ color: '#A7A7A7', fontSize: '1.125rem', fontWeight: '500', borderBottom: '2px solid #DEDEDE' }}>
                <th style={{ padding: '1rem', fontWeight: '500' }}>Doctor</th>
                <th style={{ padding: '1rem', fontWeight: '500' }}>Date</th>
                <th style={{ padding: '1rem', fontWeight: '500' }}>Time</th>
                <th style={{ padding: '1rem' }}></th>
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#F7F7F7',
                    height: '3rem',
                    borderBottom: '1px solid #DEDEDE',
                    textAlign: 'center',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F0F4F8')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#F7F7F7')}
                >
                  <td style={{ padding: '1rem' }}>Dr. XYZ</td>
                  <td style={{ padding: '1rem' }}>28/7</td>
                  <td style={{ padding: '1rem' }}>10:00 AM</td>
                  <td style={{ padding: '1rem' }}>
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
  );
}
