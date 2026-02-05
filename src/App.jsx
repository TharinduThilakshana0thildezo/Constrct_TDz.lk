import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';
import Resources from './pages/Resources';
import FindProjects from './pages/FindProjects';
import FindContractors from './pages/FindContractors';
import Consultants from './pages/Consultants';
import ContractTemplates from './pages/ContractTemplates';
import ProcurementChecklist from './pages/ProcurementChecklist';
import SupportCentre from './pages/SupportCentre';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPDPA from './pages/PrivacyPDPA';
import CookiePreferences from './pages/CookiePreferences';

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
      {currentPage === 'resources' && <Resources onNavigate={handleNavigate} />}
      {currentPage === 'find-projects' && <FindProjects onNavigate={handleNavigate} />}
      {currentPage === 'find-contractors' && <FindContractors onNavigate={handleNavigate} />}
      {currentPage === 'consultants' && <Consultants onNavigate={handleNavigate} />}
      {currentPage === 'contract-templates' && <ContractTemplates onNavigate={handleNavigate} />}
      {currentPage === 'procurement-checklist' && <ProcurementChecklist onNavigate={handleNavigate} />}
      {currentPage === 'support-centre' && <SupportCentre onNavigate={handleNavigate} />}
      {currentPage === 'terms-of-use' && <TermsOfUse onNavigate={handleNavigate} />}
      {currentPage === 'privacy-pdpa' && <PrivacyPDPA onNavigate={handleNavigate} />}
      {currentPage === 'cookie-preferences' && <CookiePreferences onNavigate={handleNavigate} />}
    </>
  );
};

export default App;

