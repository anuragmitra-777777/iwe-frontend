import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function VerifyAccount() {
  const navigate = useNavigate();
  // Simple state for 6 boxes. In production, consider using a dedicated OTP library or shadcn InputOTP
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    // Focus next input
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  return (
    <AuthLayout showBack={true}>
      <h1 className="text-2xl font-semibold mb-4 text-gray-900">Please verify your account</h1>
      <p className="text-sm text-gray-600 mb-8 leading-relaxed">
        We sent a verification code to example@gmail.com.<br/>
        Please check your inbox and enter the six digit code to verify your account.
      </p>

      <div className="flex gap-3 mb-4">
        {otp.map((data, index) => (
          <Input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            onChange={e => handleChange(e.target, index)}
            onFocus={e => e.target.select()}
            className="w-12 h-14 text-center text-lg font-semibold border-gray-300 rounded-md focus-visible:ring-iwePrimary"
          />
        ))}
      </div>

      <button className="text-iwePrimary text-sm font-semibold hover:underline mb-10">
        Resend Code
      </button>

      <div>
        <Button 
          onClick={() => navigate('/select-org')}
          className="w-full md:w-32 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-11 text-base"
        >
          Submit
        </Button>
      </div>
    </AuthLayout>
  );
}