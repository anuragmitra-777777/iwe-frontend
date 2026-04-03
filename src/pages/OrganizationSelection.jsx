import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AuthLayout from '../components/layout/AuthLayout';
import { Button } from '@/components/ui/button';
import { setOrganizationType, selectOrganizationType } from '../features/auth/authSlice';
import { ArrowLeft } from 'lucide-react';

// Import our newly organized custom SVG components
import LiaisonIcon from '../components/icons/LiaisonIcon';
import BusinessIcon from '../components/icons/BusinessIcon';

export default function OrganizationSelection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const saved = useSelector(selectOrganizationType) || null;
  const [selected, setSelected] = useState(saved);

  // Added "disabled" property to control access
  const options = [
    { value: 'liaison', label: 'I am representing a Liaison Organization', icon: LiaisonIcon, disabled: true },
    { value: 'business', label: 'I am representing a Business', icon: BusinessIcon, disabled: false },
  ];

  const handleContinue = () => {
    if (selected) {
      dispatch(setOrganizationType(selected));
      navigate('/onboarding/company-registration');
    }
  };

  return (
    <AuthLayout showBack={false}>
      <div className="flex flex-col justify-center min-h-[calc(100vh-10rem)] w-full max-w-2xl mx-auto">
        
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center text-gray-500 hover:text-gray-900 font-medium text-base mb-6 w-fit transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" /> 
          Back
        </button>

        <h1 className="text-4xl font-bold mb-10 text-gray-900">
          Who are you representing?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {options.map((opt) => {
            const Icon = opt.icon;
            const isActive = selected === opt.value;
            const isDisabled = opt.disabled;

            return (
              <button
                key={opt.value}
                type="button"
                disabled={isDisabled} // Native HTML disabled attribute
                onClick={() => !isDisabled && setSelected(opt.value)}
                className={`relative flex flex-col items-center justify-center p-10 border-2 rounded-xl transition-all duration-200 
                  ${isDisabled 
                    ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed grayscale' // Disabled styling
                    : isActive 
                      ? 'border-iwePrimary bg-iwePrimary/5 shadow-md scale-[1.02]' 
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md hover:bg-gray-50 cursor-pointer'
                  }
                  focus:outline-none focus:ring-4 focus:ring-iwePrimary/20
                `}
              >
                <Icon className={`w-14 h-14 mb-6 ${isActive ? 'text-iwePrimary' : 'text-gray-700'}`} />
                
                <span className={`text-lg font-semibold text-center ${isActive ? 'text-iwePrimary' : 'text-gray-900'}`}>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        <Button
          onClick={handleContinue}
          disabled={!selected}
          className="w-full sm:w-48 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-14 text-lg font-bold transition-all active:scale-[0.98] disabled:opacity-50 shadow-sm"
        >
          Continue
        </Button>
      </div>
    </AuthLayout>
  );
}