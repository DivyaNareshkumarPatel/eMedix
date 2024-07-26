import React from 'react';
import { Link } from 'react-router-dom';

export default function AccNavbar() {
  return (
    <div
      style={{
        backgroundColor: '#F3F4F6',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '0.5rem 2rem',
        borderBottom: '1px solid #E5E7EB',
      }}
    >
      <div className="flex items-center h-14">
        <div className="flex justify-between w-full">
          <div
            style={{
              color: '#4200FF',
              fontSize: '1.25rem',
              fontWeight: '700',
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              eMedix
            </Link>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
