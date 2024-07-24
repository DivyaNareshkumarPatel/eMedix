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
          <Route path="/docAccount" element={<DocAccount />} />
          <Route path="/checkDetails" element={<CheckDetails />} />
          <Route path="/patientAcc" element={<PatientAcc />} />
          <Route path="/rejectApp" element={<RejectApp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/createPassword" element={<CreatePassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verifyemail/:token" element={<VerifyEmail />} />
          <Route path="/doctorLogin" element={<DoctorLogin />} />
        </Routes>
      </Router>
    </div>
  );
}
