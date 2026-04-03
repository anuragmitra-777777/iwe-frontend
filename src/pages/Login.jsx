import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [error, setError] = useState("");

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) { setError("Please fill all fields"); return; }
    setError("");
    navigate('/dashboard'); 
  };

  const isValid = form.email && form.password;

  return (
    <AuthLayout>
      <div className="flex flex-col justify-center min-h-[calc(100vh-10rem)] w-full max-w-xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-10 lg:mb-12">
          <h1 className="text-4xl text-center lg:text-center font-bold text-gray-900 mb-3">
            Integrated Warfighter <br />Ecosystem
          </h1>
        </div>

        {/* Form Block */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          <h2 className="text-xl text-center lg:text-left text-gray-600 font-medium">
            Sign in
          </h2>
          <div className="space-y-4">
            <Label htmlFor="email" className="text-base font-semibold text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email" type="email" value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all"
            />
          </div>

          <div className="space-y-4">
            <Label htmlFor="password" className="text-base font-semibold text-gray-700">
              Password <span className="text-red-500">*</span>
            </Label>
            <Input
              id="password" type="password" value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all"
            />
          </div>

          <div className="flex items-center justify-between pt-2 pb-4">
            <div className="flex items-center space-x-3">
              <Switch
                id="remember" checked={form.remember}
                onCheckedChange={(val) => handleChange("remember", val)}
                className="data-[state=checked]:bg-[#15B79E] data-[state=unchecked]:bg-gray-200 scale-110 origin-left"
              />
              <Label htmlFor="remember" className="text-base text-gray-600 font-medium cursor-pointer">
                Remember Password?
              </Label>
            </div>

            <Link to="/forgot-password" className="text-base text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Forgot Password?
            </Link>
          </div>

          {error && <p className="text-red-500 text-base font-medium">{error}</p>}

          <Button
            type="submit" disabled={!isValid}
            className="w-full bg-iwePrimary hover:bg-iwePrimaryHover text-white h-14 text-lg font-bold transition-all active:scale-[0.98] shadow-sm disabled:opacity-50"
          >
            LOGIN
          </Button>
        </form>

        {/* Footer Block */}
        <div className="mt-10 text-center text-base text-gray-600">
          <p className="mb-2">
            By continuing, you agree to our{" "}
            <Link to="/legal/terms" className="underline font-semibold text-iwePrimary hover:text-iwePrimaryHover transition-all">
              Privacy Policy.
            </Link>
          </p>
          <p>
            Don't have an account?{" "}
            <Link to="/legal/terms" className="underline font-semibold text-iwePrimary hover:text-iwePrimaryHover transition-all">
              Register
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}