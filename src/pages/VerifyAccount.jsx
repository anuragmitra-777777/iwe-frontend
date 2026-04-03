import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "../features/auth/authSlice";
import { ArrowLeft } from "lucide-react";

import AuthLayout from "../components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VerifyAccount() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const user = useSelector(selectUserData);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling && element.value !== "")
      element.nextSibling.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col justify-center min-h-[calc(100vh-10rem)] w-full max-w-xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center text-gray-500 hover:text-gray-900 font-medium text-base transition-all duration-200 mb-6 w-fit"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
          Back
        </button>

        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Please verify your account
        </h1>
        <p className="text-base text-gray-600 mb-10 leading-relaxed font-medium">
          We sent a verification code to{" "}
          <span className="font-bold text-gray-900">
            {user?.email || "your email"}
          </span>
          .<br />
          Please check your inbox and enter the six digit code to verify your
          account.
        </p>

        <div className="flex justify-between gap-2 sm:gap-4 mb-6">
          {otp.map((data, index) => (
            <Input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => e.target.select()}
              className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold border-gray-300 rounded-lg focus-visible:ring-iwePrimary transition-all"
            />
          ))}
        </div>

        <button className="text-iwePrimary text-base font-semibold hover:text-iwePrimaryHover hover:underline mb-10 transition-colors text-left w-fit">
          Resend Code
        </button>

        <Button
          onClick={() => navigate("/onboarding/select-org")}
          disabled={otp.some((val) => val === "")}
          className="w-full sm:w-40 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-14 text-lg font-bold transition-all shadow-sm"
        >
          Submit
        </Button>
      </div>
    </AuthLayout>
  );
}
