"use client";

import React, { useState, useEffect } from 'react';
import { Cloud, Shield, GitBranch, Award, Server, Database, Code2, Network, Book } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

interface Skill {
  name: string;
  level: number;
  projects: number;
  details: string[];
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  skills: Skill[];
  certifications?: string[];
}

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  img: string;
}

const CertificationCard: React.FC<CertificationProps> = ({ title, issuer, date, img }) => (
  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
    <div className="flex items-start space-x-4">
      <div className="relative w-16 h-16">
        <Image
          src={img}
          alt={title}
          fill
          className="rounded object-cover"
          sizes="64px"
        />
      </div>
      <div>
        <h3 className="text-white font-bold mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{issuer}</p>
        <p className="text-purple-400 text-sm">{date}</p>
      </div>
    </div>
  </div>
);

const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Expertise in designing and implementing cloud-native solutions across major platforms.',
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
        },
        { 
          name: "GCP", 
          level: 75, 
          projects: 10,
          details: ["GKE", "Cloud Functions", "Cloud Build", "Cloud Storage"]
        }
      ],
      certifications: [
        "AWS Solutions Architect Professional",
        "Azure Solutions Architect Expert"
      ]
    },
    {
      id: 'containers',
      title: 'Container Orchestration',
      icon: Server,
      description: 'Deep experience with containerization technologies and orchestration platforms.',
      skills: [
        {
          name: "Kubernetes",
          level: 95,
          projects: 30,
          details: ["EKS", "AKS", "GKE", "Cluster Management", "Custom Controllers"]
        },
        {
          name: "Docker",
          level: 90,
          projects: 40,
          details: ["Container Optimization", "Multi-stage Builds", "Security"]
        },
        {
          name: "Helm",
          level: 85,
          projects: 20,
          details: ["Chart Development", "Release Management", "Custom Templates"]
        }
      ],
      certifications: [
        "Certified Kubernetes Administrator (CKA)",
        "Certified Kubernetes Application Developer (CKAD)"
      ]
    },
    {
      id: 'automation',
      title: 'CI/CD & Automation',
      icon: GitBranch,
      description: 'Building and maintaining automated infrastructure deployment pipelines.',
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
          details: ["Pipeline Development", "Shared Libraries", "Plugin Development"]
        },
        {
          name: "ArgoCD",
          level: 80,
          projects: 15,
          details: ["GitOps", "App of Apps", "Custom Health Checks"]
        }
      ]
    },
    {
      id: 'iac',
      title: 'Infrastructure as Code',
      icon: Code2,
      description: 'Automating infrastructure provisioning and management through code.',
      skills: [
        {
          name: "Terraform",
          level: 95,
          projects: 40,
          details: ["Multi-cloud", "Module Development", "State Management"]
        },
        {
          name: "CloudFormation",
          level: 85,
          projects: 20,
          details: ["Custom Resources", "Nested Stacks", "Cross-Stack References"]
        },
        {
          name: "Pulumi",
          level: 75,
          projects: 10,
          details: ["TypeScript", "Python", "Infrastructure SDK"]
        }
      ],
      certifications: [
        "HashiCorp Terraform Associate"
      ]
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Observability',
      icon: Network,
      description: 'Implementing comprehensive monitoring and observability solutions.',
      skills: [
        {
          name: "Prometheus",
          level: 90,
          projects: 25,
          details: ["PromQL", "Alert Rules", "Service Discovery"]
        },
        {
          name: "Grafana",
          level: 85,
          projects: 20,
          details: ["Dashboard Development", "Alerts", "Data Source Integration"]
        },
        {
          name: "ELK Stack",
          level: 80,
          projects: 15,
          details: ["Log Aggregation", "Kibana Visualizations", "Beats Configuration"]
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      description: 'Implementing secure infrastructure and maintaining compliance standards.',
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
        },
        {
          name: "Cloud Security",
          level: 85,
          projects: 15,
          details: ["IAM", "Network Security", "Compliance Automation"]
        }
      ]
    }
  ];

  const certifications: CertificationProps[] = [
    {
      title: "AWS Solutions Architect Professional",
      issuer: "Amazon Web Services",
      date: "2024",
      img: "/api/placeholder/64/64"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      img: "/api/placeholder/64/64"
    },
    {
      title: "Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      date: "2023",
      img: "/api/placeholder/64/64"
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(category => category.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}>
        <Navigation />
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Technical Skills & Expertise</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive overview of my technical capabilities in DevOps, cloud infrastructure, 
            and platform engineering, backed by industry certifications and practical experience.
          </p>
        </div>

        {/* Certifications Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </section>

        {/* Skills Filter */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-purple-600'
                : 'bg-purple-500/20 hover:bg-purple-500/30'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-purple-600'
                  : 'bg-purple-500/20 hover:bg-purple-500/30'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <category.icon className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
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

              {/* Category certifications if any */}
              {category.certifications && (
                <div className="mt-6 pt-6 border-t border-purple-500/20">
                  <div className="flex flex-wrap gap-2">
                    {category.certifications.map((cert, certIndex) => (
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

        {/* Learning Focus */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Current Learning Focus</h2>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Book className="h-5 w-5 text-purple-400" />
                <span>Advanced Kubernetes Operator Development</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Database className="h-5 w-5 text-purple-400" />
                <span>Database Infrastructure Automation</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Network className="h-5 w-5 text-purple-400" />
                <span>Service Mesh Architecture with Istio</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;