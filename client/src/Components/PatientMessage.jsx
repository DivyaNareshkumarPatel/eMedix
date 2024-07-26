import React from "react";
import { Link } from "react-router-dom";

export default function PatientMessage() {
  return (
    <div style={{ padding: '2.5rem', color: '#404040', fontFamily: 'Arial, sans-serif' }}>
      <div>
      <div style={{ color: '#4200FF', marginBottom: '1.25rem', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
          Messages by doctors
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: '0.5rem',
              backgroundColor: '#EDF2FB',
              padding: '1rem',
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {[...Array(6)].map((_, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <div style={{ paddingBottom: '0.5rem', fontWeight: '600', color: '#4200FF' }}>
                  <Link to="/doctorProfile" style={{ textDecoration: 'none', color: '#4200FF' }}>Dr. XYZ</Link>
                </div>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora voluptatem nam ad vel dolorem nisi. Porro reprehenderit fugiat non natus? Ipsam, autem voluptas nesciunt iusto delectus eos illum eligendi.
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
