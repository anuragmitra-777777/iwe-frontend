import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCompanyData } from '../features/auth/authSlice';
import AuthLayout from '../components/layout/AuthLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RefreshCw, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function CompanyInfo() {
  const dispatch = useDispatch();
  
  // 1. Safely read existing data from Redux (fallback to empty object if undefined)
  const existingCompanyData = useSelector((state) => state.auth?.companyData) || {};

  // 2. Initialize local state
  const [formData, setFormData] = useState({
    companyName: existingCompanyData.companyName || 'Cencore LLC',
    website: existingCompanyData.website || 'http://www.cencoregroup.com',
    ueid: existingCompanyData.ueid || 'JSJFI0MLSP',
    cageCode: existingCompanyData.cageCode || '82939',
    ein: existingCompanyData.ein || '92-883894',
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // 3. Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmModal(true); // Open the modal instead of submitting immediately
  };

  const handleConfirm = () => {
    dispatch(setCompanyData(formData)); // Save to Redux
    setShowConfirmModal(false); // Close modal
    // TODO: navigate to the next screen here!
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-2xl py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">About your company</h1>
          <button className="text-iwePrimary text-sm flex items-center gap-2 hover:underline">
            <RefreshCw className="w-4 h-4" /> Reset Form
          </button>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Company Name <span className="text-red-500">*</span></Label>
              {/* Removed onChange because it is disabled */}
              <Input 
                value={formData.companyName}
                disabled 
                className="h-11 bg-gray-50 border-gray-200" 
              />
            </div>
            
            <div className="space-y-2">
              <Label>Company Website <span className="text-red-500">*</span></Label>
              <Input 
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
                className="h-11" 
              />
            </div>
            
            <div className="space-y-2">
              <Label>Unique Entity ID (UEID) <span className="text-red-500">*</span></Label>
              <Input value={formData.ueid} disabled className="h-11 bg-gray-50 border-gray-200" />
              <p className="text-[10px] text-gray-400">This data cannot be changed as it came from SAM.gov</p>
            </div>
            
            <div className="space-y-2">
              <Label>Cage Code <span className="text-red-500">*</span></Label>
              <Input value={formData.cageCode} disabled className="h-11 bg-gray-50 border-gray-200" />
              <p className="text-[10px] text-gray-400">This data cannot be changed as it came from SAM.gov</p>
            </div>
            
            <div className="space-y-2">
              <Label>EIN/TIN <span className="text-red-500">*</span></Label>
              <Input 
                value={formData.ein}
                onChange={(e) => setFormData({...formData, ein: e.target.value})}
                className="h-11" 
              />
            </div>
            
            <div className="flex items-end h-full pt-6">
               <Button type="button" variant="outline" className="w-full h-11 bg-iwePrimary text-white hover:bg-iwePrimaryHover border-none flex gap-2">
                 <RefreshCw className="w-4 h-4" /> Refresh SAM.gov Data
               </Button>
            </div>
          </div>

          <Button type="submit" className="w-full md:w-32 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-11 text-base">
            Continue
          </Button>
        </form>
      </div>

      {/* Confirmation Modal overlay properly wrapped in Dialog */}
      <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
        <DialogContent className="sm:max-w-md rounded-xl p-8">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-semibold">Confirm your company</DialogTitle>
            <DialogDescription className="text-gray-500 mt-2">
              Please confirm this is the correct company you're associated with.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 my-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Your Company:</p>
              <p className="text-lg font-semibold text-gray-900">{formData.companyName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Company Address:</p>
              <p className="text-lg font-semibold text-gray-900 leading-tight">
                100 Placeholder Blvd, Suite 200,<br/>
                Anytown, ST 12345
              </p>
            </div>
          </div>

          <DialogFooter className="flex gap-3 sm:justify-start">
            <Button variant="outline" onClick={() => setShowConfirmModal(false)} className="w-full sm:w-auto h-11 border-gray-300">
              Go back
            </Button>
            {/* The confirm button is now safely inside the modal */}
            <Button onClick={handleConfirm} className="w-full sm:w-auto h-11 bg-iwePrimary hover:bg-iwePrimaryHover text-white">
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AuthLayout>
  );
}