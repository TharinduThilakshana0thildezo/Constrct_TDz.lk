import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
    setCurrentPage('dashboard');
  };

  return (
    <>
      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'overview' && <Overview onNavigate={handleNavigate} />}
      {currentPage === 'login' && <Login onNavigate={handleNavigate} onLogin={handleLogin} />}
      {currentPage === 'dashboard' && <Dashboard onNavigate={handleNavigate} user={userData} />}
    </>
  );
};

export default App;

