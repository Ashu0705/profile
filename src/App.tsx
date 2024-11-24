import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import ProfileForm from './components/ProfileForm';
import ProfileDisplay from './components/ProfileDisplay';
import { ProfileProvider } from './context/ProfileContext';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';


const App: React.FC = () => {
  const location = useLocation();
  const showNavbar = location.pathname !=='/404'
  return (
    // <Router>
    <ProfileProvider>
      {/* {showNavbar && <Navbar />} */}
      <Routes>
      <Route path='/' element={<Navigate to="/profile-form" />} /> 
      <Route path='/profile-form/:id' element={<ProfileForm />} />
      <Route path='/profile-form' element={<ProfileForm />} />
      <Route path='/profile/:id' element={<ProfileDisplay />} />
      <Route path='/404' element={<NotFound />} />
      <Route path='*' element={<Navigate to="/404" />} />
    </Routes>
    </ProfileProvider>
    // </Router>
  );
}


const MainApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;