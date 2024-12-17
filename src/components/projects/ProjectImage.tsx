import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectImageProps {
  image: string;
  title: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ image, title }) => {
  return (
    <div className="relative overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex gap-4">
          <a 
            href="#"
            className="p-2 bg-white rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="#"
            className="p-2 bg-white rounded-full transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300 delay-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};