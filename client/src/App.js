import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Doctors from './Pages/Doctors';
import Hospitals from './Pages/Hospitals';
import AboutUs from './Pages/AboutUs';
import Hospital from './Pages/Hospital';
import DoctorProfile from './Pages/DoctorProfile';
import DocAccount from './Pages/DocAccount';
import CheckDetails from './Pages/CheckDetails';
import PatientAcc from './Pages/PatientAcc';
import RejectApp from './Pages/RejectApp';
import ForgotPassword from './Pages/ForgotPassword';
import Otp from './Pages/Otp';
import CreatePassword from './Pages/CreatePassword';
import SignUp from './Pages/SignUp';
import VerifyEmail from './Pages/VerifyEmail';
import DoctorLogin from './Pages/DoctorLogin';
import AdminLogin from './Pages/AdminLogin';
import AdminPortal from './Pages/AdminPortal';
import ProtectedRoute from './Pages/ProtectRoutes';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/doctorProfile" element={<DoctorProfile />} />
          <Route
            path="/doctor-acc"
            element={
              <ProtectedRoute
                element={<DocAccount />}
                allowedRoles={['doctor']}
                tokenKey="doctorToken"
                login="/doctorLogin"
              />
            }
          />
          <Route
            path="/checkDetails/:appointmentId"
            element={
              <ProtectedRoute
                element={<CheckDetails />}
                allowedRoles={['doctor']}
                tokenKey="doctorToken"
                login="/doctorLogin"
              />
            }
          />
          <Route
            path="/patient-acc"
            element={
              <ProtectedRoute
                element={<PatientAcc />}
                allowedRoles={['user']}
                login="/login"
                tokenKey="userToken"
              />
            }
          />
          <Route path="/rejectApp" element={<RejectApp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/createPassword" element={<CreatePassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verifyemail/:token" element={<VerifyEmail />} />
          <Route path="/doctorLogin" element={<DoctorLogin />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route
            path="/admin-portal/*"
            element={<ProtectedRoute element={<AdminPortal />} allowedRoles={['admin']}
              tokenKey="adminToken" login="/adminLogin" />}
          />
        </Routes>
      </Router>
    </div>
  );
}
