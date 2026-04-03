import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function ProgramsSection({ form, setForm }) {
  const programs = [
    "Manufacturing Innovation Institute (MII)", 
    "Manufacturing Extension Partnership (MEP)", 
    "SBIR/STTR", 
    "Mentor Protege Program (MPP)", 
    "RISE", 
    "APEX Accelerator", 
    "None", 
    "Other"
  ];

  const handleCheckboxChange = (prog, checked) => {
    setForm({
      ...form, 
      programs: checked 
        ? [...form.programs, prog] 
        : form.programs.filter(p => p !== prog)
    });
  };

  return (
    <div className="space-y-5">
      <Label className="text-xl font-bold text-gray-900 leading-relaxed">
        Are you currently participating in any industry programs, small business programs, or associations? Select all that apply
      </Label>
      <div className="flex flex-col gap-4 pt-2">
        {programs.map((prog, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <Checkbox 
              id={`p-${idx}`} 
              checked={form.programs.includes(prog)} 
              onCheckedChange={(checked) => handleCheckboxChange(prog, checked)} 
              className="mt-1 scale-125 origin-left data-[state=checked]:bg-iwePrimary data-[state=checked]:border-iwePrimary" 
            />
            <Label htmlFor={`p-${idx}`} className="text-base text-gray-700 cursor-pointer font-medium leading-snug">
              {prog}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}