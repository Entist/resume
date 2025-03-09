'use client';

import React from 'react';
import Image from 'next/image';
import ErrorBoundary from './ErrorBoundary';
import type { Project } from '@/services/api';

interface ProjectsProps {
  data: Project[];
}

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => (
  <ErrorBoundary>
    <div className="relative aspect-[16/9] w-full group overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        quality={90}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  </ErrorBoundary>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <ProjectImage src={project.image} alt={project.title} />
    <div className="relative p-8">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <span className="text-sm text-black-500 bg-gray-100 px-4 py-1.5 rounded-full font-medium">
          {project.period}
        </span>
      </div>
      <p className="text-gray-600 mb-8 text-lg leading-relaxed font-light">
        {project.description}
      </p>
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 letter-spacing-wide border-blue-500 pl-3">
          사용 기술
        </h4>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 letter-spacing-wide border-green-500 pl-3">
          주요 기능
        </h4>
        <ul className="space-y-4">
          {project.achievements.map((achievement, index) => (
            <li
              key={`${achievement}-${index}`}
              className="flex items-start group/item"
            >
              <span className="text-blue-500 mr-3 text-xl group-hover/item:text-blue-600">
                •
              </span>
              <span className="text-gray-600 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                {achievement}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={project.appStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full bg-black text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        App Store에서 보기
      </a>
    </div>
  </div>
);

const Projects = ({ data }: ProjectsProps) => {
  return (
    <section id="projects" className="projects py-16">
      <div className="container">
        <h2 className="section-title text-3xl font-bold mb-12 text-center relative">
          <span className="inline-block relative after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:mt-2 pb-3">
            주요 프로젝트
          </span>
        </h2>
        <div className="projects-grid">
          {data.map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
