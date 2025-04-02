
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="space-y-4">
      {/* Contact Information */}
      <div className="mb-6 bg-gray-50 p-4 rounded-md border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex items-center gap-2 mb-3 sm:mb-0">
          <Phone className="h-5 w-5 text-red-600" />
          <a href="tel:+919915559657" className="text-base font-medium hover:text-red-600 transition-colors">+91 9915559657</a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-red-600" />
          <a href="mailto:contact@truebls.com" className="text-base font-medium hover:text-red-600 transition-colors">contact@truebls.com</a>
        </div>
      </div>
      
      {/* Embed Google Form */}
      <div className="w-full">
        <iframe
          className="w-full min-h-[85vh] border-none"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfSSgvDoBDo0edzEzhU6IhH-5TPkNFNvACSVrwI5XpjhtVRAg/viewform?embedded=true"
          frameBorder="0"
          style={{ background: 'transparent' }}
        >Loading…</iframe>
      </div>
      
      <div className="text-sm text-gray-500 flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-red-600" />
          <a href="tel:+919915559657" className="hover:text-red-600 transition-colors">+91 9915559657</a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-red-600" />
          <a href="mailto:contact@truebls.com" className="hover:text-red-600 transition-colors">contact@truebls.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
