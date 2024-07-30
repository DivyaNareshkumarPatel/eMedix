import React, {useState, useEffect} from 'react'
import Navbar from '../Components/Navbar'
import PatientWel from '../Components/PatientWel'
import PatientAppReq from '../Components/PatientAppReq'
import PatientReqAcc from '../Components/PatientReqAcc'
import PatientMessage from '../Components/PatientMessage'
import PatientRequestRejected from '../Components/PatientRequestRejected'
import Footer from '../Components/Footer'
import { getUserToken } from '../services/authService';
export default function PatientAcc() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = getUserToken();
    if (token) {
      const user = JSON.parse(atob(token.split('.')[1]));
      setUserId(user.id);
    }
  }, []);

  if (!userId) return <div>Loading...</div>;
  return (
    <div>
      <Navbar/>
      <PatientWel userId={userId} />
      <PatientAppReq userId={userId} />
      {/* <PatientReqAcc userId={userId} />
      <PatientMessage userId={userId} />
      <PatientRequestRejected userId={userId} /> */}
      <Footer/>
    </div>
  )
}
