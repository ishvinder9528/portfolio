import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Ishvinder Singh</p>
            <p className="text-gray-400">
              Building the future, one line at a time
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#about" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ishvinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
