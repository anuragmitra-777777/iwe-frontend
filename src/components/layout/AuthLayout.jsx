import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AuthLayout({ children, showBack = false }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans">
      {/* Left Side - Graphic & Logo */}
      <div className="hidden lg:flex lg:w-[45%] bg-black text-white p-12 relative flex-col overflow-hidden">
        <div className="z-10 text-4xl font-bold flex items-center gap-2 tracking-widest">
          <span className="text-white">() IWE</span>
        </div>
        
        {/* Replace this div with your actual image tag */}
        <div className="absolute bottom-0 right-0 left-0 top-32 bg-[url('/src/assets/images/soldier-wireframe.png')] bg-contain bg-no-repeat bg-bottom opacity-90 mix-blend-screen pointer-events-none"></div>
      </div>

      {/* Right Side - Dynamic Content */}
      <div className="w-full lg:w-[55%] bg-white flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 relative overflow-y-auto">
        
        {/* Optional Global Back Button */}
        {showBack && (
          <button 
            onClick={() => navigate(-1)}
            className="absolute top-8 left-8 lg:top-16 lg:left-16 flex items-center text-iwePrimary hover:text-iwePrimaryHover font-medium text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
        )}

        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}