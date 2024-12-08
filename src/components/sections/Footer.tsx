// src/components/sections/Footer.tsx
"use client";

import React from 'react';
import { Github, Linkedin, Twitter, Terminal } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const navigation = {
    main: [
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Skills', href: '/skills' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ],
    social: [
      { name: 'GitHub', icon: Github, href: 'https://github.com/spiffaz' },
      { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/azeta-spiff' },
      { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/spiffaz' }
    ]
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-purple-400" />
            <span className="text-white font-mono">Spiff.Azeta</span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navigation.main.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} Spiff Azeta. All rights reserved.</p>
            <p className="mt-1">
              Built with passion and{' '}
              <span className="text-purple-400">{'<code />'}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;