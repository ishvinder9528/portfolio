import React from 'react';
import ProjectCard from './projects/ProjectCard';
import AnimatedSection from './ui/AnimatedSection';
import { Project } from '../types/project';

const projects: Project[] = [
  {
    title: 'AI Trip Planner',
    description: '',
    image:
      'https://images.unsplash.com/photo-1506485338023-6ce5f36692df?q=80&w=2070&auto=format&fit=crop&w=1350&q=80',
    tech: ['React', 'Redux', 'Gemini AI', "Google API's"],
    github: 'https://github.com/ishvinder9528/ai-trip-planner',
    live: 'https://ai-trip-planner-wheat.vercel.app/',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates.',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://project.com',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool using OpenAI API.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tech: ['Next.js', 'OpenAI API', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://project.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 200}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
