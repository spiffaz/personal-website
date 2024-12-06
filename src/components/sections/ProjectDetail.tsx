"use client";

import React from 'react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  // In a real Next.js app, this would be populated by getStaticProps or similar
  const projectData = {
    title: "Cloud Infrastructure Migration",
    company: "FinTech Corp",
    duration: "Jan 2023 - June 2023",
    description: "Led the migration of legacy systems to a cloud-native architecture, resulting in 60% cost reduction and improved scalability.",
    longDescription: `
      Spearheaded a comprehensive cloud migration project that transformed the company's infrastructure. 
      The project involved moving 50+ applications from on-premise servers to AWS, implementing 
      infrastructure as code, and establishing modern DevOps practices.
    `,
    impact: [
      "Reduced infrastructure costs by 60%",
      "Improved system reliability from 99.9% to 99.99%",
      "Decreased deployment time from hours to minutes",
      "Implemented auto-scaling saving $200k annually"
    ],
    technologies: [
      "AWS (ECS, EKS, Lambda)",
      "Terraform",
      "Python",
      "Docker",
      "Kubernetes",
      "GitHub Actions"
    ],
    challenges: [
      {
        title: "Zero-Downtime Migration",
        description: "Developed a phased migration strategy that ensured continuous service availability during the transition."
      },
      {
        title: "Legacy System Integration",
        description: "Created custom middleware to maintain compatibility with remaining on-premise systems."
      }
    ],
    keyFeatures: [
      "Automated infrastructure provisioning",
      "Multi-region failover",
      "Real-time monitoring and alerting",
      "Self-healing infrastructure"
    ],
    images: [
      "/api/placeholder/800/400",
      "/api/placeholder/800/400"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <a href="/projects" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </a>
          
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-4">{projectData.title}</h1>
              {projectData.company && (
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  {projectData.company}
                </span>
              )}
            </div>
            <div className="flex space-x-4">
              {projectData.githubUrl && (
                <a 
                  href={projectData.githubUrl}
                  className="flex items-center px-4 py-2 bg-purple-500/20 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View Source
                </a>
              )}
              {projectData.liveUrl && (
                <a 
                  href={projectData.liveUrl}
                  className="flex items-center px-4 py-2 bg-purple-500/20 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Information */}
          <div className="md:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 whitespace-pre-line">{projectData.longDescription}</p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {projectData.keyFeatures.map((feature, index) => (
                  <li 
                    key={index}
                    className="bg-black/20 backdrop-blur-sm rounded-lg p-4"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <div className="space-y-4">
                {projectData.challenges.map((challenge, index) => (
                  <div key={index} className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">{challenge.title}</h3>
                    <p className="text-gray-300">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Images */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
              <div className="grid gap-4">
                {projectData.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`Project screenshot ${index + 1}`}
                    className="rounded-lg w-full"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Project Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Timeline</h3>
                  <p>{projectData.duration}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Impact & Results */}
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Impact & Results</h2>
              <ul className="space-y-3">
                {projectData.impact.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;