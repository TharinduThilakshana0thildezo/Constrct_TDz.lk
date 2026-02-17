import React, { useMemo, useEffect, lazy, Suspense } from 'react';
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
import InformationalPage from './pages/InformationalPage';
import Faqs from './pages/Faqs';
const PostProjectWizard = lazy(() => import('./pages/PostProjectWizard'));
const ContractorWorkspace = lazy(() => import('./pages/ContractorWorkspace'));
const AdminConsole = lazy(() => import('./pages/AdminConsole'));
const CostTools = lazy(() => import('./pages/CostTools'));
import { useAppState } from './context/AppStateContext';
import SkipLink from './components/SkipLink';
import OnboardingTour from './components/OnboardingTour';
import GlobalSearchBar from './components/GlobalSearchBar';
import NotificationCenter from './components/NotificationCenter';
import ProjectChatDock from './components/ProjectChatDock';
import ToastStack from './components/ToastStack';

const personas = {
  homeowner: {
    name: 'Layla Khoo',
    email: 'layla@constudio.com',
    avatar: 'LK',
    role: 'Homeowner',
  },
  contractor: {
    name: 'Noah Idris',
    email: 'noah@buildgrid.co',
    avatar: 'NI',
    role: 'Contractor',
  },
  admin: {
    name: 'System Admin',
    email: 'ops@constrct.io',
    avatar: 'AD',
    role: 'Admin',
  },
};

const App = () => {
  const { state, navigate } = useAppState();
  const { currentPage, role, ui } = state;
  const persona = useMemo(() => personas[role] || personas.homeowner, [role]);

  useEffect(() => {
    document.body.classList.toggle('reduce-motion', ui.reduceMotion);
  }, [ui.reduceMotion]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'overview':
        return <Overview onNavigate={navigate} />;
      case 'login':
        return <Login onNavigate={navigate} onLogin={() => navigate('dashboard')} />;
      case 'dashboard':
        return <Dashboard onNavigate={navigate} user={persona} />;
      case 'contractor':
        return <ContractorWorkspace onNavigate={navigate} />;
      case 'admin':
        return <AdminConsole onNavigate={navigate} />;
      case 'post-project':
        return <PostProjectWizard onNavigate={navigate} />;
      case 'cost-tools':
        return <CostTools onNavigate={navigate} />;
      case 'resources':
        return <Resources onNavigate={navigate} />;
      case 'about':
        return <InformationalPage onNavigate={navigate} pageKey="about" />;
      case 'how-it-works':
        return <InformationalPage onNavigate={navigate} pageKey="how-it-works" />;
      case 'trust':
        return <InformationalPage onNavigate={navigate} pageKey="trust" />;
      case 'compliance':
        return <InformationalPage onNavigate={navigate} pageKey="compliance" />;
      case 'help-center':
        return <InformationalPage onNavigate={navigate} pageKey="help-center" />;
      case 'contact':
        return <InformationalPage onNavigate={navigate} pageKey="contact" />;
      case 'cost-guide':
        return <InformationalPage onNavigate={navigate} pageKey="cost-guide" />;
      case 'insights':
        return <InformationalPage onNavigate={navigate} pageKey="insights" />;
      case 'reports':
        return <InformationalPage onNavigate={navigate} pageKey="reports" />;
      case 'faqs':
        return <Faqs onNavigate={navigate} />;
      case 'find-projects':
        return <FindProjects onNavigate={navigate} />;
      case 'find-contractors':
        return <FindContractors onNavigate={navigate} />;
      case 'consultants':
        return <Consultants onNavigate={navigate} />;
      case 'contract-templates':
        return <ContractTemplates onNavigate={navigate} />;
      case 'procurement-checklist':
        return <ProcurementChecklist onNavigate={navigate} />;
      case 'support-centre':
        return <SupportCentre onNavigate={navigate} />;
      case 'terms-of-use':
        return <TermsOfUse onNavigate={navigate} />;
      case 'privacy-pdpa':
        return <PrivacyPDPA onNavigate={navigate} />;
      case 'cookie-preferences':
        return <CookiePreferences onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <>
      <SkipLink targetId="app-content" />
      <div id="app-content" tabIndex={-1} className="focus:outline-none">
        <Suspense
          fallback={(
            <div className="flex min-h-screen items-center justify-center bg-background text-textPrimary">
              <p className="text-sm uppercase tracking-[0.3em] text-textSecondary">Loading workspace…</p>
            </div>
          )}
        >
          {renderPage()}
        </Suspense>
      </div>
      <OnboardingTour />
      <GlobalSearchBar />
      <NotificationCenter />
      <ProjectChatDock />
      <ToastStack />
    </>
  );
};

export default App;

