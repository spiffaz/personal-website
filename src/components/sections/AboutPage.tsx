"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, Code2, GitBranch, Cloud, Cpu, Network, Award, Book, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';

const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => setIsVisible(entry.isIntersecting));
      },
      { threshold }
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold]);

  return [domRef, isVisible];
};

const FadeInSection = ({ children, delay = 0, direction = 'up' }) => {
  const [ref, isVisible] = useScrollAnimation();

  const directions = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10'
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${directions[direction]}`}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const TimelineEvent = ({ year, title, description, delay }) => (
  <FadeInSection delay={delay}>
    <div className="relative pl-8 pb-8 border-l border-purple-500/20 last:border-0">
      <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 transform transition-transform duration-500 hover:scale-150"></div>
      <div className="text-purple-400 text-sm mb-1">{year}</div>
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </FadeInSection>
);

const ValueCard = ({ icon: Icon, title, description, delay }) => (
  <FadeInSection delay={delay}>
    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 transform transition-all duration-300 hover:scale-105 hover:border-purple-500/40">
      <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transform transition-all duration-300 hover:rotate-12">
        <Icon className="h-6 w-6 text-purple-400" />
      </div>
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </FadeInSection>
);

const StatCard = ({ icon: Icon, label, value, delay }) => (
  <FadeInSection delay={delay}>
    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4 transform transition-all duration-300 hover:scale-105">
      <div className="bg-purple-500/20 p-2 rounded-lg transform transition-all duration-300 group-hover:rotate-12">
        <Icon className="h-6 w-6 text-purple-400" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white animate-counter">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  </FadeInSection>
);

const AboutPage = () => {
  const [animatedStats, setAnimatedStats] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timeline = [
    {
      year: '2024',
      title: 'Lead DevOps Engineer at TechCorp',
      description: 'Leading cloud infrastructure modernization and implementing GitOps practices across the organization.'
    },
    {
      year: '2022',
      title: 'Senior DevOps Engineer at CloudScale',
      description: 'Architected and implemented multi-cloud solutions, reducing deployment time by 80% and infrastructure costs by 40%.'
    },
    {
      year: '2020',
      title: 'DevOps Engineer at StartupTech',
      description: 'Built CI/CD pipelines and automated infrastructure provisioning for rapid product delivery.'
    }
  ];

  const values = [
    {
      icon: Code2,
      title: 'Automation First',
      description: 'Believe in automating everything that can be automated, freeing up time for innovation and improvement.'
    },
    {
      icon: GitBranch,
      title: 'Continuous Learning',
      description: 'Stay current with emerging technologies and best practices in the ever-evolving DevOps landscape.'
    },
    {
      icon: Network,
      title: 'Collaboration',
      description: 'Foster a culture of shared responsibility and knowledge exchange between development and operations.'
    }
  ];

  const stats = [
    { icon: Cloud, label: 'Cloud Platforms', value: '3+' },
    { icon: Terminal, label: 'Tools Mastered', value: '15+' },
    { icon: Award, label: 'Certifications', value: '5' },
    { icon: Book, label: 'Blog Posts', value: '20+' }
  ];

  const certifications = [
    'AWS Solutions Architect Professional',
    'Certified Kubernetes Administrator',
    'HashiCorp Terraform Associate',
    'Azure DevOps Engineer Expert',
    'Google Cloud Professional Engineer'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}>
        <Navigation />
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Hero Section */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A DevOps engineer passionate about building scalable infrastructure, automating processes,
              and fostering collaboration between development and operations teams.
            </p>
          </div>
        </FadeInSection>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 100} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Journey Timeline */}
          <div className="md:col-span-2 bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
            <FadeInSection>
              <h2 className="text-2xl font-bold text-white mb-6">Professional Journey</h2>
            </FadeInSection>
            <div className="space-y-6">
              {timeline.map((event, index) => (
                <TimelineEvent key={index} {...event} delay={index * 200} />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
            <FadeInSection>
              <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
            </FadeInSection>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <div className="flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-2">
                    <Award className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">{cert}</span>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="mt-16">
          <FadeInSection>
            <h2 className="text-2xl font-bold text-white mb-8">My DevOps Philosophy</h2>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} delay={index * 200} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <FadeInSection delay={600}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Great Together</h3>
            <p className="text-gray-300 mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default AboutPage;