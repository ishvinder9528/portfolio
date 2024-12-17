import React from 'react';
import AnimatedSection from './ui/AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={200}>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Developer workspace"
                className="rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-gray-600 mb-4">
                I'm a passionate software engineer with 3+ years of experience
                in building web applications. My journey in tech started with a
                curiosity about how things work on the internet, which led me to
                pursue a career in software development.
              </p>
              <p className="text-gray-600 mb-6">
                I specialize in JavaScript/TypeScript, React, Angular, Node.js,
                and modern web technologies. I'm passionate about creating
                efficient, scalable, and maintainable solutions that solve
                real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Education
                  </h3>
                  <p className="text-gray-600">B.Tech Computer Science</p>
                  <p className="text-gray-500">
                    Dr. APJ Abdul Kalam University
                  </p>
                </div>
                <div className="transform hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Bangalore, Karnataka</p>
                  <p className="text-gray-500">Available Worldwide</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
