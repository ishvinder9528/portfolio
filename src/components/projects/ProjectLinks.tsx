import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectLinksProps {
  github: string;
  live: string;
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ github, live }) => {
  return (
    <div className="flex gap-4 mt-4">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Github size={18} />
        <span>Source</span>
      </a>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ExternalLink size={18} />
        <span>Live Demo</span>
      </a>
    </div>
  );
};