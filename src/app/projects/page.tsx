// src/app/projects/page.tsx
"use client";

import React, { useState } from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const ProjectsOverview = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Cloud Automation Scripts",
      description: "A collection of automation scripts for AWS cloud infrastructure management and deployment.",
      tags: ["AWS", "Python", "Cloud Automation"],
      githubUrl: "https://github.com/spiffaz/CustomScripts",
      isOpenSource: true,
      type: "open-source"
    },
    {
      title: "Cloud Infrastructure Migration",
      company: "FinTech Corp",
      description: "Led the migration of legacy systems to a cloud-native architecture, resulting in 60% cost reduction and improved scalability.",
      tags: ["AWS", "Terraform", "Kubernetes", "CI/CD"],
      projectUrl: "/projects/cloud-migration",
      type: "professional"
    },
    {
      title: "DevOps Platform Automation",
      company: "Tech Solutions Inc",
      description: "Built a comprehensive DevOps platform serving 200+ developers, reducing deployment time by 80%.",
      tags: ["Python", "Docker", "Jenkins", "ArgoCD"],
      projectUrl: "/projects/devops-platform",
      type: "professional"
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <a href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </a>
          <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-gray-300 mb-8">A collection of my work in cloud infrastructure, automation, and DevOps.</p>
          
          {/* Filter Buttons */}
          <div className="flex space-x-4">
            {['all', 'professional', 'open-source'].map((type) => (
              <button 
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === type 
                    ? 'bg-purple-600' 
                    : 'bg-purple-500/20 hover:bg-purple-500/30'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Projects
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              {project.company && (
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mb-3">
                  {project.company}
                </span>
              )}
              {project.isOpenSource && (
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm mb-3">
                  Open Source
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Source
                  </a>
                )}
                {project.projectUrl && (
                  <a 
                    href={project.projectUrl}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Learn More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;