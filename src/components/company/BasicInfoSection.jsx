import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

export default function BasicInfoSection({ form, setForm, onRefreshSamData }) {
  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-8">
      <div className="col-span-1 md:col-span-2 space-y-3">
        <Label className="text-base font-semibold text-gray-700">Company Name *</Label>
        <Input value={form.companyName} className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all" onChange={(e) => handleChange('companyName', e.target.value)} required />
      </div>
      <div className="col-span-1 md:col-span-2 space-y-3">
        <Label className="text-base font-semibold text-gray-700">Company Website *</Label>
        <Input value={form.website} className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all" onChange={(e) => handleChange('website', e.target.value)} />
      </div>

      <div className="col-span-1 md:col-span-2 space-y-3">
        <Label className="text-base font-semibold text-gray-700">Unique Entity ID (UEID) *</Label>
        <Input value={form.ueid} disabled className="h-14 px-4 text-base md:text-base bg-gray-50 text-gray-500 border-gray-200" />
        <p className="text-xs font-medium text-gray-400">This data cannot be changed as it came from SAM.gov</p>
      </div>
      <div className="col-span-1 md:col-span-2 space-y-3">
        <Label className="text-base font-semibold text-gray-700">Cage Code *</Label>
        <Input value={form.cageCode} disabled className="h-14 px-4 text-base md:text-base bg-gray-50 text-gray-500 border-gray-200" />
        <p className="text-xs font-medium text-gray-400">This data cannot be changed as it came from SAM.gov</p>
      </div>

      <div className="col-span-1 md:col-span-2 space-y-3">
        <Label className="text-base font-semibold text-gray-700">EIN/TIN *</Label>
        <Input value={form.ein} className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all" onChange={(e) => handleChange('ein', e.target.value)} />
      </div>
      <div className="col-span-1 md:col-span-2 flex items-end pt-2">
        <Button 
          type="button" 
          onClick={onRefreshSamData} 
          className="w-full h-14 text-base font-bold bg-iwePrimary hover:bg-iwePrimaryHover text-white flex gap-2 transition-all shadow-sm"
        >
          <RefreshCw className="w-5 h-5" /> Refresh SAM.gov Data
        </Button>
      </div>

      {/* Founder & Location Data */}
      <div className="col-span-1 md:col-span-2 space-y-3">
        <Label className="text-base font-semibold text-gray-700">Founder Name *</Label>
        <Input value={form.founder} disabled className="h-14 px-4 text-base md:text-base bg-gray-50 text-gray-500 border-gray-200" />
      </div>
      <div className="col-span-1 md:col-span-2 space-y-3">
        <Label className="text-base font-semibold text-gray-700">Year Founded *</Label>
        <Input value={form.foundedYear} className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all" onChange={(e) => handleChange('foundedYear', e.target.value)} />
      </div>

      <div className="col-span-1 md:col-span-2 space-y-3">
        <Label className="text-base font-semibold text-gray-700">State of Registration *</Label>
        <Input value={form.stateReg} className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all" onChange={(e) => handleChange('stateReg', e.target.value)} />
      </div>
      <div className="col-span-1 md:col-span-1 space-y-3">
        <Label className="text-base font-semibold text-gray-700">Registration Code *</Label>
        <Input value={form.regCode} className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all" onChange={(e) => handleChange('regCode', e.target.value)} />
      </div>
      <div className="col-span-1 md:col-span-1 space-y-3">
        <Label className="text-base font-semibold text-gray-700">State *</Label>
        <Input value={form.state} className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all" onChange={(e) => handleChange('state', e.target.value)} />
      </div>

      <div className="col-span-1 md:col-span-2 space-y-3">
        <Label className="text-base font-semibold text-gray-700">Company Address *</Label>
        <Input value={form.address} className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all" onChange={(e) => handleChange('address', e.target.value)} />
      </div>
      <div className="col-span-1 md:col-span-1 space-y-3">
        <Label className="text-base font-semibold text-gray-700">City *</Label>
        <Input value={form.city} className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all" onChange={(e) => handleChange('city', e.target.value)} />
      </div>
      <div className="col-span-1 md:col-span-1 space-y-3">
        <Label className="text-base font-semibold text-gray-700">Zip Code *</Label>
        <Input value={form.zip} className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all" onChange={(e) => handleChange('zip', e.target.value)} />
      </div>
    </div>
  );
}