import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import logo from '@/assets/images/logo.png';
import soldier from '@/assets/images/soldier-wireframe.png';

export default function AuthLayout({ children, showBack = false }) {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col lg:flex-row font-sans overflow-hidden bg-white">

      {/* Left Side - Fixed */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-[40%] h-full bg-[#0a0a0a] text-white p-12 lg:p-16 relative flex-col overflow-hidden shadow-2xl z-10">
        <div className="z-10 flex items-center">
          <img src={logo} alt="IWE logo" className="h-10 lg:h-12 object-contain" />
        </div>
        <img 
          src={soldier} alt="Soldier Graphic"
          className="scale-150 absolute z-0 pointer-events-none mix-blend-screen opacity-[0.85] max-w-none w-[150%] bottom-[-18%] left-[-20%]"
        />
      </div>

      {/* Right Side - Scrollable */}
      <div className="w-full lg:w-[55%] xl:w-[60%] h-full flex flex-col items-center px-6 py-8 sm:px-10 md:px-12 lg:px-10 lg:py-16 relative overflow-y-auto scroll-smooth custom-scrollbar">
        
        {showBack && (
          <button 
            aria-label="Go back" onClick={() => navigate(-1)}
            className="group absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-12 lg:left-10 flex items-center text-gray-500 hover:text-gray-900 font-medium text-sm sm:text-base transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" /> 
            Back
          </button>
        )}

        <div className="flex-1 flex flex-col w-full max-w-3xl mt-14 sm:mt-10 lg:mt-0 pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}