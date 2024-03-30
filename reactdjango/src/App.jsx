//React Imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import IndexPage from './IndexPage';
import AboutUs from './AboutUs';
import ErrorPage from './ErrorPage';
import Login from './Login';
import AdminPage from './AdminPage';

function App(){

  //const navigate = useNavigate();

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/index" element={<IndexPage />} />
      <Route path="/about" element={<AboutUs /> } />
      <Route path="/admin" element={<AdminPage /> } />
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  </Router>
  );
};

export default App;
