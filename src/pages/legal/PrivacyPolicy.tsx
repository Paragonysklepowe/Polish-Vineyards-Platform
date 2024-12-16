import React from 'react';
import { Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <Shield className="h-8 w-8 text-[#722F37] mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                This Privacy Policy explains how Polish Vineyards ("we," "us," or "our") collects, uses, 
                and protects your personal information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800">2.1 Personal Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800">2.2 Usage Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Browser type and version</li>
                  <li>IP address</li>
                  <li>Device information</li>
                  <li>Pages visited and interactions</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>To provide and improve our services</li>
                <li>To process your transactions</li>
                <li>To send you updates and marketing communications</li>
                <li>To ensure website security and prevent fraud</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
              <p className="text-gray-700 mb-3">
                Under GDPR and other applicable privacy laws, you have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-3 text-gray-700">
                <p>Email: privacy@polishvineyards.com</p>
                <p>Phone: +48 123 456 789</p>
                <p>Address: ul. Winna 1, 00-001 Warsaw, Poland</p>
              </div>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};