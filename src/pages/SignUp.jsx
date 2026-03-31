import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../features/auth/authSlice';
import AuthLayout from '../components/layout/AuthLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 1. Local state to hold form inputs while typing
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    preferredName: '',
    title: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // 3. Handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to global Redux store (excluding passwords for security)
    dispatch(setUserData({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      title: formData.title
    }));

    // Move to next step
    navigate('/verify');
  };

  return (
    <AuthLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2 text-gray-900">Sign Up</h1>
        <p className="text-sm text-gray-500">
          Already have an account? <Link to="/login" className="text-iwePrimary font-semibold hover:underline">Sign in</Link>
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
            <Input id="firstName" value={formData.firstName} onChange={handleChange} required className="h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
            <Input id="lastName" value={formData.lastName} onChange={handleChange} required className="h-11" />
          </div>
          {/* ... Add value and onChange to the rest of your inputs similarly ... */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
            <Input id="email" type="email" value={formData.email} onChange={handleChange} required className="h-11" />
          </div>
        </div>

        <Button type="submit" className="w-full md:w-32 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-11 mt-4">
          Submit
        </Button>
      </form>
    </AuthLayout>
  );
}