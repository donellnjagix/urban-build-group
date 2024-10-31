import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number in the format https://wa.me/<number>
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <FaWhatsapp size={24} className="z-0" />
    </a>
  );
};

export default WhatsAppButton;
