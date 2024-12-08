"use client";

import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectMetrics {
  [key: string]: string;
}

interface ProjectLinks {
  github?: string;
  demo?: string;
  documentation?: string;
}

interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  metrics: ProjectMetrics;
  links: ProjectLinks;
  featured?: boolean;
}

interface Category {
  id: string;
  name: string;
}

const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects: Project[] = [
    {
      title: "Kubernetes Auto-Scaling Solution",
      description: "Developed a custom autoscaling solution for Kubernetes clusters that reduced infrastructure costs by 40% while maintaining application performance.",
      category: "infrastructure",
      tags: ["Kubernetes", "Go", "Prometheus", "AWS"],
      metrics: {
        cost: "40% cost reduction",
        performance: "99.99% uptime",
        scale: "200+ nodes managed"
      },
      links: {
        github: "https://github.com/username/k8s-autoscaler",
        demo: "https://demo.example.com"
      },
      featured: true
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built a comprehensive CI/CD automation framework that reduced deployment time from hours to minutes and eliminated manual deployment errors.",
      category: "automation",
      tags: ["Jenkins", "Docker", "AWS", "Terraform"],
      metrics: {
        efficiency: "90% faster deployments",
        reliability: "Zero deployment failures",
        adoption: "20+ teams onboarded"
      },
      links: {
        github: "https://github.com/username/cicd-automation"
      },
      featured: true
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Created a modular IaC framework using Terraform and AWS CDK, enabling teams to provision compliant infrastructure in minutes.",
      category: "infrastructure",
      tags: ["Terraform", "AWS CDK", "Python"],
      metrics: {
        provisioning: "15min avg setup time",
        compliance: "100% policy compliance",
        reuse: "30+ modules created"
      },
      links: {
        github: "https://github.com/username/iac-framework",
        documentation: "https://docs.example.com"
      }
    }
  ];

  const categories: Category[] = [
    { id: 'all', name: 'All Projects' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'automation', name: 'Automation' },
    { id: 'security', name: 'Security' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
          <p className="text-gray-400">Explore my recent work in DevOps and cloud infrastructure</p>
        </div>
        <Link 
          href="/projects" 
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          View all projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* Category Filter */}
      <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === category.id
                ? 'bg-purple-600'
                : 'bg-purple-500/20 hover:bg-purple-500/30'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            {project.featured && (
              <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mb-4">
                Featured Project
              </div>
            )}
            
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Tags */}
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

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(project.metrics).map(([key, value], index) => (
                <div key={index} className="bg-purple-500/10 rounded-lg p-3">
                  <p className="text-purple-300 text-sm capitalize">{key}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center space-x-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View Source
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;