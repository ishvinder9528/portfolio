import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-8">
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out if you'd like to work together!
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:ishvinder133@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/ishvindersingh1/"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="text-gray-600">
            <p>Or find me on other platforms:</p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://github.com/ishvinder9528"
                className="hover:text-gray-900"
              >
                <Github size={24} />
              </a>
              {/* Add more social links as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
