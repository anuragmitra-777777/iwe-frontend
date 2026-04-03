import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { setOrganizationType } from "@/features/auth/authSlice";
import { ArrowLeft } from "lucide-react";

export default function CompanyRegistration() {
  const [isRegistered, setIsRegistered] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleContinue = () => {
    if (!isRegistered) {
      setError("Please select an option");
      return;
    }

    dispatch(setOrganizationType(isRegistered));

    navigate("/onboarding/find-company");
  };

  return (
    <AuthLayout showBack={false}>
      <div className="flex flex-col justify-center min-h-[calc(100vh-10rem)] w-full max-w-xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center text-gray-500 hover:text-gray-900 font-medium text-base mb-6 w-fit transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back
        </button>

        <h1 className="text-4xl font-bold mb-3 text-gray-900">
          Company Registration Info
        </h1>
        <p className="text-base text-gray-500 mb-10 font-medium">
          Let's find your company or create it in our system.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleContinue();
          }}
          className="w-full"
        >
          <div className="mb-12 space-y-6">
            <Label className="text-xl font-bold text-gray-900">
              Is your company registered with SAM.gov?
            </Label>

            <RadioGroup
              value={isRegistered}
              onValueChange={(val) => {
                setIsRegistered(val);
                setError("");
              }}
              className="space-y-4 pt-2"
            >
              <div className="flex items-center space-x-4">
                <RadioGroupItem
                  value="yes"
                  id="yes"
                  className="scale-125 origin-left"
                />
                <Label
                  htmlFor="yes"
                  className="font-semibold text-gray-800 text-lg cursor-pointer"
                >
                  Yes
                </Label>
              </div>

              <div className="flex items-center space-x-4">
                <RadioGroupItem
                  value="no"
                  id="no"
                  className="scale-125 origin-left"
                />
                <Label
                  htmlFor="no"
                  className="font-semibold text-gray-800 text-lg cursor-pointer"
                >
                  No
                </Label>
              </div>
            </RadioGroup>

            {error && (
              <p className="text-red-500 text-base font-medium mt-2">{error}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={!isRegistered}
            className="w-full sm:w-40 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-14 text-lg font-bold transition-all shadow-sm"
          >
            Continue
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
}
