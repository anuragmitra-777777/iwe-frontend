import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import { Button } from "@/components/ui/button";

export default function TermsOfUse() {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/auth/signup", { state: { termsAccepted: true } });
  };

  const handleDecline = () => {
    navigate("/auth/login");
  };

  return (
    <AuthLayout>
      {/* CHANGED: Replaced h-full min-h-[...] with a strict h-[calc(100vh-8rem)].
        This locks the container to the viewport, forcing the middle section to scroll.
      */}
      <div className="flex flex-col h-[calc(100vh-8rem)]">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 shrink-0">
          Terms of Use
        </h1>

        <div className="flex-1 space-y-6 text-[15px] text-gray-800 leading-relaxed mb-8 overflow-y-auto pr-4 custom-scrollbar">
          <div>
            <h2 className="font-bold mb-1 text-black">Use of the Site</h2>
            <p>
              You agree to use the Site only for lawful purposes and in a manner
              that does not violate applicable laws or infringe on the rights of
              others. You may not attempt to interfere with the operation,
              security, or functionality of the Site.
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-1 text-black">Intellectual Property</h2>
            <p>
              All content on the Site, including text, graphics, logos, and
              other materials, is owned by or licensed to the Site owner and is
              protected by intellectual property laws. You may not copy,
              distribute, modify, or reuse any content without prior written
              permission unless expressly allowed.
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-1 text-black">User Content</h2>
            <p>
              If you submit content through the Site, you represent that you
              have the right to do so. By submitting content, you grant the Site
              owner a non-exclusive, royalty-free license to use, display, and
              reproduce such content in connection with the Site.
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-1 text-black">Third-Party Links</h2>
            <p>
              The Site may include links to third-party websites for
              convenience. The Site owner is not responsible for the content,
              policies, or practices of third-party sites and does not endorse
              them.
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-1 text-black">
              Disclaimer and Limitation of Liability
            </h2>
            <p>
              The Site is provided "as is" and without warranties of any kind.
              The Site owner does not guarantee the accuracy, completeness, or
              availability of the Site and is not liable for any damages arising
              from its use or inability to use the Site.
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-1 text-black">
              Changes and Termination
            </h2>
            <p>
              The Site owner may update these Terms at any time without notice.
              Continued use of the Site constitutes acceptance of any changes.
              Access to the Site may be suspended or terminated at any time for
              any reason.
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-1 text-black">Governing Law</h2>
            <p>These Terms are governed by the laws of [Jurisdiction].</p>
          </div>
        </div>

        <div className="flex gap-4 shrink-0 pb-4">
          <Button
            onClick={handleAccept}
            className="w-32 bg-iwePrimary hover:bg-iwePrimaryHover text-white h-11 font-semibold transition-all"
          >
            Accept
          </Button>
          <Button
            variant="outline"
            onClick={handleDecline}
            className="w-32 border-gray-300 text-gray-700 h-11 hover:bg-gray-50 font-semibold transition-all"
          >
            Decline
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}