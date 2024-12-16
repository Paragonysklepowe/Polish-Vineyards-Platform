import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#722F37] mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about Polish vineyards or need assistance planning your wine tour?
            We're here to help! Fill out the form below or reach out through our contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <ContactForm />
            </div>
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};