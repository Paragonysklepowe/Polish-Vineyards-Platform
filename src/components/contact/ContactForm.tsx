import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '../common/Button';
import { useContactForm } from '../../hooks/useContactForm';
import type { ContactFormData } from '../../types/contact';

export const ContactForm: React.FC = () => {
  const { handleSubmit, isSubmitting, errors } = useContactForm();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(formData);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37]"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37]"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37]"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37]"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#722F37] focus:ring-[#722F37]"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} fullWidth>
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};