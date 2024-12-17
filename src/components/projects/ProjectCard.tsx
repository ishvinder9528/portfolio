import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types/project';
import { ProjectLinks } from './ProjectLinks';
import { ProjectTechStack } from './ProjectTechStack';
import { ProjectImage } from './ProjectImage';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <ProjectImage image={project.image} title={project.title} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <ProjectTechStack technologies={project.tech} />
        <ProjectLinks github={project.github} live={project.live} />
      </div>
    </div>
  );
};

export default ProjectCard;