import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

const Hero = () => {
  return (
    <Section id="home" className="pt-32 pb-20">
      <div className="max-w-3xl">
        <AnimatedSection delay={200}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building Digital Solutions with Code & Creativity
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Full-stack software engineer specializing in building exceptional digital experiences.
            Currently focused on building accessible, human-centered products.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#projects" variant="primary" icon={ArrowRight}>
              View My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
};

export default Hero;