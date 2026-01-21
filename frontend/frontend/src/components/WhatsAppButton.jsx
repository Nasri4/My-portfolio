import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://web.whatsapp.com/" // Replace with your WhatsApp link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#1E2939] text-white p-4 rounded-full shadow-lg hover:bg-[#101828] transition-colors"
      style={{ zIndex: 1000 }} // Ensure it stays on top of other elements
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;