"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Server, Cloud, Code2, GitBranch } from 'lucide-react';
import Navigation from '@/components/Navigation';

interface TypewriterProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

interface Command {
  cmd: string;
  output: string;
}

interface StatsCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay = 50, onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return <span>{currentText}</span>;
};

const TerminalWindow: React.FC = () => {
  const commands: Command[] = [
    {
      cmd: 'whoami',
      output: 'DevOps Engineer | Platform Engineer | Tech Innovator'
    },
    {
      cmd: 'ls skills/',
      output: 'kubernetes/ docker/ terraform/ aws-cloud/ azure-cloud/ ci-cd/ ansible/ helm/ gitops/'
    },
    {
      cmd: 'cat current_status.txt',
      output: 'Building scalable infrastructure and automating everything 🚀'
    },
    {
      cmd: 'git status',
      output: 'On branch main\nSystems performing at scale\nInfrastructure as Code: ✓\nCI/CD Pipelines: ✓\nPlatform Engineering: ✓\nScaling: ✓\nAutomation: ✓\nCloud Optimization: ✓\nSecurity Best Practices: ✓\nMonitoring & Logging: ✓'
    }
  ];

  const [currentCommand, setCurrentCommand] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleCommandComplete = () => {
    setIsTyping(false);
    setTimeout(() => {
      setShowOutput(true);
      setTimeout(() => {
        if (currentCommand < commands.length - 1) {
          setCurrentCommand(prev => prev + 1);
          setShowOutput(false);
          setIsTyping(true);
        }
      }, 2000);
    }, 500);
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm shadow-xl">
      <div className="flex items-center space-x-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex items-center">
            <span className="text-purple-400">$</span>
            <span className="ml-2">
              {isTyping && (
                <Typewriter 
                  text={commands[currentCommand].cmd}
                  onComplete={handleCommandComplete}
                />
              )}
              {!isTyping && commands[currentCommand].cmd}
              {showCursor && <span className="text-purple-400">▋</span>}
            </span>
          </div>
          {showOutput && (
            <div className="text-gray-300 mt-2 whitespace-pre-line">
              {commands[currentCommand].output}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, title, value }) => (
  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 flex items-center space-x-4">
    <div className="bg-purple-500/20 p-3 rounded-lg">
      <Icon className="h-6 w-6 text-purple-400" />
    </div>
    <div>
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}>
        <Navigation />
      </nav>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium">
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Hey, I'm <span className="text-purple-400">Spiff</span>
            </h1>
            <p className="text-xl text-gray-300">
              I'm a DevOps Engineer who loves automation, infrastructure as code, and building reliable, scalable systems. I'm always exploring new tech like AI and crypto, looking for creative ways to apply them or build cool stuff.
            </p>
            <div className="flex space-x-6">
              <Github className="h-6 w-6 hover:text-purple-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 hover:text-purple-400 cursor-pointer transition-colors" />
              <Mail className="h-6 w-6 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
            <div className="flex space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition-colors">
                View Portfolio
              </button>
              <button className="border border-purple-400 hover:bg-purple-400/10 px-6 py-3 rounded-lg font-medium transition-colors">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Terminal Animation */}
          <TerminalWindow />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <StatsCard icon={Server} title="Servers Managed" value="500+" />
          <StatsCard icon={Cloud} title="Cloud Projects" value="50+" />
          <StatsCard icon={Code2} title="CI/CD Pipelines" value="200+" />
          <StatsCard icon={GitBranch} title="Open Source Contributions" value="30+" />
        </div>
      </div>
    </div>
  );
};

export default Hero;