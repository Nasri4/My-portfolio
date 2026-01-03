import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-800 dark:text-white">
          © 2025 Nasri. All rights reserved.
        </p>
        <a
          href="https://github.com/Nasri4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;