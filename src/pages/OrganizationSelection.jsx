import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthLayout from '../components/layout/AuthLayout';
import { Button } from '@/components/ui/button';
import { setRegistrationData } from '../features/auth/authSlice';
import { Building2, Building } from 'lucide-react'; // Using lucide icons as placeholders

export default function OrganizationSelection() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleContinue = () => {
    if (selected) {
      dispatch(setRegistrationData({ organizationType: selected }));
      navigate('/company-registration');
    }
  };

  return (
    <AuthLayout showBack={true}>
      <h1 className="text-2xl font-semibold mb-8 text-gray-900">Who are you representing?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Option 1 */}
        <button
          onClick={() => setSelected('liaison')}
          className={`flex flex-col items-center justify-center p-8 border rounded-lg transition-all ${
            selected === 'liaison' 
              ? 'border-iwePrimary bg-iwePrimary/5 shadow-sm' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <Building className="w-10 h-10 mb-4 text-gray-800" />
          <span className="text-sm font-medium text-center text-gray-900">
            I am representing a<br/>Liaison Organization
          </span>
        </button>

        {/* Option 2 */}
        <button
          onClick={() => setSelected('business')}
          className={`flex flex-col items-center justify-center p-8 border rounded-lg transition-all ${
            selected === 'business' 
              ? 'border-iwePrimary bg-iwePrimary/5 shadow-sm' 
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <Building2 className="w-10 h-10 mb-4 text-gray-800" />
          <span className="text-sm font-medium text-center text-gray-900">
            I am representing<br/>a Business
          </span>
        </button>
      </div>

      <Button 
        onClick={handleContinue}
        disabled={!selected}
        className="w-full md:w-auto px-10 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-12 text-base font-semibold disabled:opacity-50"
      >
        Continue
      </Button>
    </AuthLayout>
  );
}