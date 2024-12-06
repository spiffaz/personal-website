// src/components/sections/SkillsHighlight.tsx
"use client";

import React from 'react';
import { Cloud, Shield, GitBranch, Terminal, Award, Server, ArrowRight } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  projects: number;
  details: string[];
}

interface SkillSet {
  category: string;
  icon: React.ElementType;
  title: string;
  description: string;
  skills: Skill[];
  certifications?: string[];
}

const SkillsHighlight: React.FC = () => {
  const skills: SkillSet[] = [
    {
      category: "cloud",
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Expertise in building and managing scalable cloud infrastructure with a focus on AWS and multi-cloud environments.",
      skills: [
        { 
          name: "AWS", 
          level: 90, 
          projects: 25, 
          details: ["EC2", "EKS", "Lambda", "CloudFormation", "S3", "RDS"] 
        },
        { 
          name: "Azure", 
          level: 85, 
          projects: 15, 
          details: ["AKS", "Azure Functions", "Azure DevOps", "ARM Templates"] 
        }
      ],
      certifications: ["AWS Solutions Architect Professional", "Azure DevOps Engineer"]
    },
    {
      category: "automation",
      icon: GitBranch,
      title: "CI/CD & Automation",
      description: "Implementation of robust CI/CD pipelines and automation workflows for streamlined development and deployment.",
      skills: [
        { 
          name: "GitHub Actions", 
          level: 90, 
          projects: 35, 
          details: ["Custom Actions", "Matrix Builds", "Self-hosted Runners"] 
        },
        { 
          name: "Jenkins", 
          level: 85, 
          projects: 25, 
          details: ["Pipelines", "Shared Libraries", "Plugins Development"] 
        }
      ]
    },
    {
      category: "security",
      icon: Shield,
      title: "Security & Compliance",
      description: "Implementing secure infrastructure and maintaining compliance standards.",
      skills: [
        { 
          name: "HashiCorp Vault", 
          level: 85, 
          projects: 20, 
          details: ["Secret Management", "PKI", "Dynamic Credentials"] 
        },
        { 
          name: "Container Security", 
          level: 90, 
          projects: 25, 
          details: ["Trivy", "Snyk", "Image Scanning", "Runtime Security"] 
        }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Technical Expertise</h2>
            <p className="text-gray-400">Specialized in cloud infrastructure and DevOps practices</p>
          </div>
          <a 
            href="/skills" 
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            View all skills
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillSet, index) => (
            <div 
              key={index}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <skillSet.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillSet.title}</h3>
                </div>
                <p className="text-gray-400">{skillSet.description}</p>
              </div>

              <div className="space-y-4">
                {skillSet.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.projects} projects</span>
                    </div>
                    {/* Skill progress bar */}
                    <div className="h-2 bg-purple-500/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    {/* Skill details tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skill.details.map((detail, detailIndex) => (
                        <span
                          key={detailIndex}
                          className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications if any */}
              {skillSet.certifications && (
                <div className="mt-6 pt-6 border-t border-purple-500/20">
                  <div className="flex flex-wrap gap-2">
                    {skillSet.certifications.map((cert, certIndex) => (
                      <span 
                        key={certIndex}
                        className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm"
                      >
                        <Award className="h-3 w-3 mr-1" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsHighlight;