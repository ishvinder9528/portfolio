import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Ishvinder Singh
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/ishvinder9528"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ishvindersingh1"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">
                Skills
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
