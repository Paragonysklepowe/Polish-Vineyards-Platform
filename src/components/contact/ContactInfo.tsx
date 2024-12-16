import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div className="flex items-center space-x-3">
        <MapPin className="h-5 w-5 text-[#722F37]" />
        <div>
          <h3 className="font-medium text-gray-900">Address</h3>
          <p className="text-gray-600">ul. Winna 1, 00-001 Warsaw, Poland</p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Phone className="h-5 w-5 text-[#722F37]" />
        <div>
          <h3 className="font-medium text-gray-900">Phone</h3>
          <p className="text-gray-600">+48 123 456 789</p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Mail className="h-5 w-5 text-[#722F37]" />
        <div>
          <h3 className="font-medium text-gray-900">Email</h3>
          <p className="text-gray-600">contact@polishvineyards.com</p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Clock className="h-5 w-5 text-[#722F37]" />
        <div>
          <h3 className="font-medium text-gray-900">Business Hours</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 10:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};