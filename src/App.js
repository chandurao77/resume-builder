import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ResumeBuilder from './components/ResumeBuilder';
import Preview from './components/Preview';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = React.useContext(AuthContext);

  return (
    <Container>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/resume-builder" element={user ? <ResumeBuilder /> : <Navigate to="/login" />} />
        <Route path="/preview" element={user ? <Preview /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Container>
  );
}

export default App;
