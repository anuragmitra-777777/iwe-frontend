import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SocialMediaSection({ form, setForm }) {
  const networks = ['linkedin', 'facebook', 'youtube', 'instagram'];

  return (
    <div className="space-y-6">
      <Label className="text-xl font-bold text-gray-900">Company social media links</Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        {networks.map(social => (
          <div key={social} className="space-y-3">
            <Label className="text-base font-semibold text-gray-700 capitalize">{social}</Label>
            <Input 
              className="h-14 px-4 text-base md:text-base border-gray-300 focus-visible:ring-iwePrimary transition-all" 
              value={form[social]} 
              onChange={(e) => setForm({ ...form, [social]: e.target.value })} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}