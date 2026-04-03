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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth & Registration Flow */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/verify" element={<VerifyAccount />} />
        
        {/* Onboarding Flow */}
        <Route path="/onboarding/select-org" element={<OrganizationSelection />} />
        <Route path="/onboarding/company-registration" element={<CompanyRegistration />} />
        <Route path="/onboarding/find-company" element={<FindCompany />} />
        <Route path="/onboarding/company-info" element={<CompanyInfo />} />
        
        {/* Legal */}
        <Route path="/legal/terms" element={<TermsOfUse />} />

        {/* Default route redirects to the new login path */}
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}