
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="space-y-4">
      {/* Embed Airtable form */}
      <div className="w-full">
        <iframe
          className="airtable-embed w-full min-h-[85vh] border-none"
          src="https://airtable.com/appPqLyziBE8oetDP/shrbJn1qDBh0QZdYx"
          frameBorder="0"
          style={{ background: 'transparent' }}
        ></iframe>
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
