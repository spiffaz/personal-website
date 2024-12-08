import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Link from 'next/link'

const ContactHomeSection = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/spiffaz',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/azeta-spiff',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/spiffaz',
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can work together to build robust, scalable infrastructure solutions.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                >
                  <link.icon className="h-6 w-6 text-purple-400" />
                </a>
              ))}
            </div>

            <Link 
              href="/contact" 
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactHomeSection;