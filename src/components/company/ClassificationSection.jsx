import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function ClassificationSection({ form, setForm }) {
  return (
    <div className="space-y-5">
      <Label className="text-xl font-bold text-gray-900">How is your Company Classified?</Label>
      <RadioGroup 
        value={form.classification} 
        onValueChange={(val) => setForm({ ...form, classification: val })} 
        className="flex flex-col sm:flex-row sm:gap-10 gap-4 pt-2"
      >
        <div className="flex items-center space-x-4">
          <RadioGroupItem value="small" id="sm-biz" className="scale-125 origin-left" />
          <Label htmlFor="sm-biz" className="text-lg text-gray-800 cursor-pointer font-medium">Small Business</Label>
        </div>
        <div className="flex items-center space-x-4">
          <RadioGroupItem value="other" id="oth-biz" className="scale-125 origin-left" />
          <Label htmlFor="oth-biz" className="text-lg text-gray-800 cursor-pointer font-medium">
            Other than a small Business
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}