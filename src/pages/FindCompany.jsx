import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function FindCompany() {
  const [searchMethod, setSearchMethod] = useState('companyName');
  const navigate = useNavigate();

  return (
    <AuthLayout showBack={true}>
      <h1 className="text-2xl font-semibold mb-2 text-gray-900">Find your company</h1>
      <p className="text-sm text-gray-500 mb-8">
        Search for your company below. If it's not found, please <Link to="/company-registration" className="text-iwePrimary font-semibold hover:underline underline-offset-2">Add it now</Link>
      </p>

      <RadioGroup value={searchMethod} onValueChange={setSearchMethod} className="space-y-3 mb-6">
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="ueid" id="ueid" className="text-iwePrimary border-gray-400" />
          <Label htmlFor="ueid" className="font-normal text-gray-700">Unique Entity ID (UEID)</Label>
        </div>
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="cage" id="cage" className="text-iwePrimary border-gray-400" />
          <Label htmlFor="cage" className="font-normal text-gray-700">CAGE Code</Label>
        </div>
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="companyName" id="companyName" className="text-iwePrimary border-gray-400" />
          <Label htmlFor="companyName" className="font-normal text-gray-700">Company Name</Label>
        </div>
      </RadioGroup>

      <div className="mb-10 w-full max-w-sm">
        {/* Placeholder for Shadcn Select or Combobox depending on searchMethod */}
        <Input 
          placeholder={searchMethod === 'companyName' ? "Choose from list" : "Enter search term..."} 
          className="h-11 border-gray-300 bg-white"
        />
      </div>

      <Button onClick={() => navigate('/company-info')} className="w-full md:w-32 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-11 text-base font-semibold">
        Continue
      </Button>
    </AuthLayout>
  );
}