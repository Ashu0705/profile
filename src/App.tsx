import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProfileForm from './components/ProfileForm';
import ProfileDisplay from './components/ProfileDisplay';
import { ProfileProvider } from './context/ProfileContext';
import NotFound from './components/NotFound';


const App: React.FC = () => {
  return (
    // <Router>
    <ProfileProvider>
      <Routes>
      <Route path="/" element={<Navigate to="/profile-form" />} />
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