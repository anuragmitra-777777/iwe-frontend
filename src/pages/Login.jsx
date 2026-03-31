import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

export default function Login() {
  return (
    <AuthLayout>
      <div className="mb-10 text-center lg:text-left">
        <h1 className="text-2xl font-semibold mb-2 text-gray-900">Sign in</h1>
        <h2 className="text-xl text-gray-600 hidden lg:block">Integrated Warfighter Ecosystem</h2>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
          <Input id="email" type="email" placeholder="" className="h-12 border-gray-300" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password <span className="text-red-500">*</span></Label>
          <Input id="password" type="password" className="h-12 border-gray-300" />
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Switch id="remember" className="data-[state=checked]:bg-iwePrimary" />
            <Label htmlFor="remember" className="text-sm text-gray-500 font-normal">Remember Password ?</Label>
          </div>
          <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-gray-800">
            Forgot Password ?
          </Link>
        </div>

        <Button className="w-full bg-iwePrimary hover:bg-iwePrimaryHover text-white h-12 text-base font-semibold">
          LOGIN
        </Button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p className="mb-4">
          By continuing, you agree to our <Link to="/terms" className="underline hover:text-gray-800">Privacy Policy.</Link>
        </p>
        <p>
          Don't have an account? <Link to="/signup" className="text-iwePrimary hover:underline">Register</Link>
        </p>
      </div>
    </AuthLayout>
  );
}