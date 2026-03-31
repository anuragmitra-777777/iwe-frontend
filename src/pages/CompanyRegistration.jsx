import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function CompanyRegistration() {
  const [isRegistered, setIsRegistered] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (isRegistered === 'yes') {
      navigate('/find-company');
    } else if (isRegistered === 'no') {
      navigate('/company-info'); // Or wherever manual entry goes
    }
  };

  return (
    <AuthLayout showBack={true}>
      <h1 className="text-2xl font-semibold mb-2 text-gray-900">Company Registration Info</h1>
      <p className="text-sm text-gray-500 mb-8">
        Let's find your company or create it in our system.
      </p>

      <div className="mb-8 space-y-4">
        <Label className="text-base font-semibold">Is your company registered with SAM.gov?</Label>
        
        <RadioGroup value={isRegistered} onValueChange={setIsRegistered} className="space-y-3 pt-2">
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="yes" id="yes" className="text-iwePrimary border-gray-400" />
            <Label htmlFor="yes" className="font-normal text-gray-700 text-base">Yes</Label>
          </div>
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="no" id="no" className="text-iwePrimary border-gray-400" />
            <Label htmlFor="no" className="font-normal text-gray-700 text-base">No</Label>
          </div>
        </RadioGroup>
      </div>

      <Button 
        onClick={handleContinue}
        disabled={!isRegistered}
        className="w-full md:w-32 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-11 text-base font-semibold disabled:opacity-50"
      >
        Continue
      </Button>
    </AuthLayout>
  );
}