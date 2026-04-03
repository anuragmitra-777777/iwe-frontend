import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCompanyData,
  selectUserData,
  selectOrganizationType,
} from "@/features/auth/authSlice";
import { RefreshCw } from "lucide-react";
import AuthLayout from "../components/layout/AuthLayout";
import { Button } from "@/components/ui/button";

import ConfirmCompanyModal from "../components/company/ConfirmCompanyModal";
import BasicInfoSection from "../components/company/BasicInfoSection";
import ClassificationSection from "../components/company/ClassificationSection";
import ProgramsSection from "../components/company/ProgramsSection";
import MaterialsUploadSection from "../components/company/MaterialsUploadSection";
import SocialMediaSection from "../components/company/SocialMediaSection";

const INITIAL_FORM_STATE = {
  companyName: "",
  website: "",
  ueid: "",
  cageCode: "",
  ein: "",
  founder: "",
  foundedYear: "",
  stateReg: "",
  regCode: "",
  state: "",
  address: "",
  city: "",
  zip: "",
  classification: "",
  programs: [],
  linkedin: "",
  facebook: "",
  youtube: "",
  instagram: "",
};

export default function CompanyInfo() {
  const dispatch = useDispatch();

  const userData = useSelector(selectUserData);
  const organizationType = useSelector(selectOrganizationType);

  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleRefreshSamData = () => {
    setForm((prev) => ({
      ...prev,
      companyName: "Cencore LLC",
      website: "http://www.cencoregroup.com",
      ueid: "JSJFI0MLSP",
      cageCode: "82939",
      ein: "92-883894",
      founder: "Adam Fife",
      foundedYear: "2010",
      stateReg: "UT",
      state: "UT",
      address: "59 W 900 N",
      city: "Springville",
      zip: "84663",
    }));
  };

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const handleFinalConfirm = () => {
    setShowConfirmModal(false);

    // Save final company data to Redux
    dispatch(setCompanyData(form));

    // 2. Combine EVERYTHING into JSON payload for backend
    const completeOnboardingPayload = {
      userDetails: userData, // Contains name, email, agreeTerms, etc. from Sign Up
      isRegisteredWithSam: organizationType, // Contains 'yes' or 'no'
      companyDetails: form, // Contains all the inputs from this specific page
    };

    // Formatted JSON string!
    console.log("Onboarding Complete! Final JSON Payload:");
    console.log(JSON.stringify(completeOnboardingPayload, null, 2));

    // navigate('/dashboard');
  };

  return (
    <AuthLayout showBack={true}>
      {/* Confirmation Modal Component */}
      <ConfirmCompanyModal
        isOpen={showConfirmModal}
        setIsOpen={setShowConfirmModal}
        form={form}
        onConfirm={handleFinalConfirm}
      />

      <div className="flex flex-col justify-center min-h-[calc(100vh-10rem)] w-full max-w-3xl mx-auto pt-4 pb-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 gap-4">
          <h1 className="text-4xl font-bold text-gray-900">
            About your company
          </h1>
          <button
            type="button"
            onClick={() => setForm(INITIAL_FORM_STATE)}
            className="text-iwePrimary hover:text-iwePrimaryHover text-base flex items-center gap-2 hover:underline font-semibold transition-colors"
          >
            <RefreshCw className="w-5 h-5" /> Reset Form
          </button>
        </div>

        {/* The Form */}
        <form className="space-y-12" onSubmit={handleInitialSubmit}>
          <BasicInfoSection
            form={form}
            setForm={setForm}
            onRefreshSamData={handleRefreshSamData}
          />

          <hr className="border-gray-200" />

          <ClassificationSection form={form} setForm={setForm} />
          <ProgramsSection form={form} setForm={setForm} />
          <MaterialsUploadSection />

          <hr className="border-gray-200" />

          <SocialMediaSection form={form} setForm={setForm} />

          {/* Final Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full sm:w-48 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-14 text-lg font-bold transition-all shadow-sm"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
