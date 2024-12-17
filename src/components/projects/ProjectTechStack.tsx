import React from 'react';

interface ProjectTechStackProps {
  technologies: string[];
}

export const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech) => (
        <span 
          key={tech}
          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full transition-colors hover:bg-gray-200"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};