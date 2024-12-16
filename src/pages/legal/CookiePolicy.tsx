import React from 'react';
import { Cookie } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <Cookie className="h-8 w-8 text-[#722F37] mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Cookie Policy</h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience and allow certain features to work.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">2.1 Necessary Cookies</h3>
                  <p className="text-gray-700">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>Authentication cookies</li>
                    <li>Security cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800">2.2 Analytics Cookies</h3>
                  <p className="text-gray-700">
                    Help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>Google Analytics cookies</li>
                    <li>Performance monitoring cookies</li>
                    <li>User behavior tracking cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800">2.3 Marketing Cookies</h3>
                  <p className="text-gray-700">
                    Used to deliver relevant advertisements and track marketing campaign performance.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>Advertising cookies</li>
                    <li>Social media cookies</li>
                    <li>Retargeting cookies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Managing Cookies</h2>
              <p className="text-gray-700 mb-3">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Through your browser settings</li>
                <li>Using our cookie consent manager</li>
                <li>Via third-party opt-out tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700">
                Some cookies are placed by third-party services that appear on our pages. We do not 
                control these cookies and recommend reviewing the privacy policies of these third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Cookie Duration</h2>
              <div className="space-y-3">
                <p className="text-gray-700">Our cookies have different lifespans:</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Session cookies: Deleted when you close your browser</li>
                  <li>Persistent cookies: Remain for a specified period</li>
                  <li>Permanent cookies: Remain until manually deleted</li>
                </ul>
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