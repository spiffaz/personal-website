'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Github, ExternalLink, Search, X } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  projectUrl?: string;
  company?: string;
  isOpenSource?: boolean;
  type: 'professional' | 'open-source';
}

interface FilterButtonProps {
  type: string;
  currentFilter: string;
  onClick: (type: string) => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ type, currentFilter, onClick, children }) => (
  <button 
    onClick={() => onClick(type)}
    className={`px-4 py-2 rounded-lg transition-colors ${
      currentFilter === type 
        ? 'bg-purple-600' 
        : 'bg-purple-500/20 hover:bg-purple-500/30'
    }`}
  >
    {children}
  </button>
);

const TagButton: React.FC<{ tag: string; onClick: () => void }> = ({ tag, onClick }) => (
  <button
    onClick={onClick}
    className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm hover:bg-purple-500/20 transition-colors"
  >
    {tag}
  </button>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02]">
    <div className="mb-4">
      {project.company && (
        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mb-3">
          {project.company}
        </span>
      )}
      {project.isOpenSource && (
        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm mb-3 ml-2">
          Open Source
        </span>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400">{project.description}</p>
    </div>
    
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

    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {project.githubUrl && (
          <Link 
            href={project.githubUrl}
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 mr-2" />
            View Source
          </Link>
        )}
      </div>

      {project.projectUrl && (
        <Link 
          href={project.projectUrl}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          Learn More
          <ExternalLink className="ml-2 h-5 w-5" />
        </Link>
      )}
    </div>
  </div>
);

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
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

  // Get unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  // Filter projects based on type and search query
  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.type === filter;
    const matchesSearch = !searchQuery || [
      project.title,
      project.description,
      ...project.tags
    ].some(text => 
      text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return matchesFilter && matchesSearch;
  });

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/40 backdrop-blur-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <Navigation />
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-300 mb-8">
            A collection of my work in cloud infrastructure, automation, and DevOps.
          </p>

          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2 bg-black/40 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          
          {/* Filter Buttons */}
          <div className="flex space-x-4 mb-8">
            {['all', 'professional', 'open-source'].map((type) => (
              <FilterButton
                key={type}
                type={type}
                currentFilter={filter}
                onClick={setFilter}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Projects
              </FilterButton>
            ))}
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {allTags.map((tag) => (
              <TagButton
                key={tag}
                tag={tag}
                onClick={() => handleTagClick(tag)}
              />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-300">
              No projects found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;