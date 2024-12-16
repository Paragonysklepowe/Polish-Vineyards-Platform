import React from 'react';
import { Scale, History } from 'lucide-react';
import { Button } from '../../components/common/Button';

const lastUpdate = '2024-03-15';
const version = '2.1.0';

const versionHistory = [
  { version: '2.1.0', date: '2024-03-15', changes: 'Updated data processing terms' },
  { version: '2.0.0', date: '2024-01-01', changes: 'Major revision of all sections' },
  { version: '1.0.0', date: '2023-12-01', changes: 'Initial release' },
];

export const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-[#722F37] mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Version {version}</p>
              <p className="text-sm text-gray-500">Last updated: {lastUpdate}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                Welcome to Polish Vineyards. These Terms and Conditions govern your use of our website
                and services. By accessing or using our platform, you agree to be bound by these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Definitions</h2>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-medium">Platform:</span> The Polish Vineyards website and all related services.
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">User:</span> Any individual or entity accessing or using the Platform.
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Content:</span> All information, text, images, and materials available on the Platform.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Rights and Obligations</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800">3.1 Account Registration</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Users must provide accurate and complete information</li>
                  <li>Users are responsible for maintaining account security</li>
                  <li>Accounts are non-transferable</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mt-6">3.2 Acceptable Use</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Users must comply with all applicable laws</li>
                  <li>No unauthorized access or use of the Platform</li>
                  <li>No interference with Platform operation</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on the Platform is protected by copyright and other intellectual property
                rights owned by Polish Vineyards or its licensors.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Users may not copy, modify, or distribute Platform content without permission</li>
                <li>Trademarks and logos are protected</li>
                <li>User-generated content remains the property of the user</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700">
                Polish Vineyards provides the Platform "as is" and makes no warranties, express or
                implied. We shall not be liable for any damages arising from your use of the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Users will be notified of
                significant changes, and continued use constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these terms, please contact us:
              </p>
              <div className="text-gray-700">
                <p>Email: legal@polishvineyards.com</p>
                <p>Phone: +48 123 456 789</p>
                <p>Address: ul. Winna 1, 00-001 Warsaw, Poland</p>
              </div>
            </section>

            <section className="border-t pt-6">
              <div className="flex items-center mb-4">
                <History className="h-5 w-5 text-[#722F37] mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Version History</h2>
              </div>
              <div className="space-y-4">
                {versionHistory.map((item) => (
                  <div key={item.version} className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">Version {item.version}</p>
                      <p className="text-sm text-gray-500">{item.changes}</p>
                    </div>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex justify-between items-center pt-6 border-t">
              <Button href="/legal/privacy-center" variant="outline">
                Privacy Center
              </Button>
              <Button href="/contact">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};