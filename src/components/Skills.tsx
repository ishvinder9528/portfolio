import React from 'react';
import AnimatedSection from './ui/AnimatedSection';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
  { category: 'Soft Skills', items: ['Problem Solving', 'Team Leadership', 'Communication', 'Agile'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Technical Skills
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <AnimatedSection key={skillSet.category} delay={index * 200}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {skillSet.category}
                </h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill) => (
                    <li 
                      key={skill} 
                      className="flex items-center transform hover:translate-x-2 transition-transform duration-300"
                    >
                      <span className="w-2 h-2 bg-gray-900 rounded-full mr-2"></span>
                      <span className="text-gray-600">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;