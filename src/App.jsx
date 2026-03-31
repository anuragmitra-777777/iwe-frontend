import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import all pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import VerifyAccount from './pages/VerifyAccount';
import OrganizationSelection from './pages/OrganizationSelection';
import CompanyRegistration from './pages/CompanyRegistration';
import FindCompany from './pages/FindCompany';
import CompanyInfo from './pages/CompanyInfo';
import TermsOfUse from './pages/TermsOfUse';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth & Registration Flow */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<VerifyAccount />} />
        
        {/* Onboarding Flow */}
        <Route path="/select-org" element={<OrganizationSelection />} />
        <Route path="/company-registration" element={<CompanyRegistration />} />
        <Route path="/find-company" element={<FindCompany />} />
        <Route path="/company-info" element={<CompanyInfo />} />
        
        {/* Legal */}
        <Route path="/terms" element={<TermsOfUse />} />

        {/* Default route redirects to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;