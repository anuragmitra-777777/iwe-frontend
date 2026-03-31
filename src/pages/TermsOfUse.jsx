import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import { Button } from '@/components/ui/button';

export default function TermsOfUse() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <h1 className="text-2xl font-semibold mb-6 text-gray-900">Terms of Use</h1>
      
      <div className="space-y-6 text-sm text-gray-800 leading-relaxed mb-10 h-96 overflow-y-auto pr-4 custom-scrollbar">
        <div>
          <h2 className="font-bold mb-1">Use of the Site</h2>
          <p>You agree to use the Site only for lawful purposes and in a manner that does not violate applicable laws or infringe on the rights of others. You may not attempt to interfere with the operation, security, or functionality of the Site.</p>
        </div>
        
        <div>
          <h2 className="font-bold mb-1">Intellectual Property</h2>
          <p>All content on the Site, including text, graphics, logos, and other materials, is owned by or licensed to the Site owner and is protected by intellectual property laws. You may not copy, distribute, modify, or reuse any content without prior written permission unless expressly allowed.</p>
        </div>

        <div>
          <h2 className="font-bold mb-1">User Content</h2>
          <p>If you submit content through the Site, you represent that you have the right to do so. By submitting content, you grant the Site owner a non-exclusive, royalty-free license to use, display, and reproduce such content in connection with the Site.</p>
        </div>

        <div>
          <h2 className="font-bold mb-1">Third-Party Links</h2>
          <p>The Site may include links to third-party websites for convenience. The Site owner is not responsible for the content, policies, or practices of third-party sites and does not endorse them.</p>
        </div>

        <div>
          <h2 className="font-bold mb-1">Disclaimer and Limitation of Liability</h2>
          <p>The Site is provided "as is" and without warranties of any kind. The Site owner does not guarantee the accuracy, completeness, or availability of the Site and is not liable for any damages arising from its use or inability to use the Site.</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Button onClick={() => navigate('/')} className="w-32 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-11">
          Accept
        </Button>
        <Button variant="outline" className="w-32 border-gray-300 text-gray-700 h-11 hover:bg-gray-50">
          Decline
        </Button>
      </div>
    </AuthLayout>
  );
}