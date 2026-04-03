import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../features/auth/authSlice";
import AuthLayout from "../components/layout/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation(); // 3. Initialize useLocation
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!location.state?.termsAccepted) {
      navigate("/legal/terms", { replace: true });
    }
  }, [location, navigate]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    preferredName: "",
    title: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: location.state?.termsAccepted || false,
  });

  const formFields = [
    { id: "firstName", label: "First Name", type: "text", required: true },
    { id: "lastName", label: "Last Name", type: "text", required: true },
    {
      id: "preferredName",
      label: "Preferred Name",
      type: "text",
      required: true,
    },
    { id: "title", label: "Title", type: "text", required: true },
    { id: "email", label: "Email Address", type: "email", required: true },
    { id: "phone", label: "Phone Number", type: "tel", required: true },
    { id: "password", label: "Password", type: "password", required: true },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      required: true,
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      setError("Please fill all required fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.agreeTerms) {
      setError("You must agree to the Terms of Use to continue.");
      return;
    }

    setError("");
    dispatch(setUserData(formData));
    navigate("/auth/verify");
  };

  return (
    <AuthLayout>
      <div className="flex flex-col justify-center min-h-[calc(100vh-10rem)] w-full">
        <div className="mb-10 lg:mb-12">
          <h1 className="text-4xl font-bold mb-3 text-gray-900">Sign Up</h1>
        </div>

        <form className="space-y-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            {formFields.map((field) => (
              <div key={field.id} className="space-y-4">
                <Label
                  htmlFor={field.id}
                  className="text-base font-semibold text-gray-700"
                >
                  {field.label}{" "}
                  {field.required && <span className="text-red-500">*</span>}
                </Label>
                <Input
                  id={field.id}
                  type={field.type}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required={field.required}
                  className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all"
                />
              </div>
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-base font-medium">{error}</p>
          )}

          <div className="pb-4">
            <Button
              type="submit"
              className="w-full md:w-40 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-14 text-lg font-bold transition-all active:scale-[0.98] shadow-sm"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
