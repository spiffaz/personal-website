"use client";

import React from 'react';
import { Github, Linkedin, Mail, Twitter, ArrowRight, MapPin, Calendar, Clock } from 'lucide-react';

const ContactPage = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/spiffaz',
      description: 'Check out my open source projects and contributions'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/azeta-spiff',
      description: 'Connect with me professionally'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/spiffaz',
      description: 'Follow me for DevOps tips and updates'
    }
  ];

  const availabilityInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Remote / EU'
    },
    {
      icon: Calendar,
      label: 'Availability',
      value: 'Open to new opportunities'
    },
    {
      icon: Clock,
      label: 'Time Zone',
      value: 'Central European Time (CET)'
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Integration with Formspree or similar service would go here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Let's Connect</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Whether you want to discuss DevOps practices, collaborate on a project, or just say hello,
            I'm always open to connecting with fellow technology enthusiasts.
          </p>
        </div>

        {/* Availability Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {availabilityInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <info.icon className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Social Links and Email */}
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex items-center space-x-4"
              >
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <link.icon className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{link.name}</h3>
                  <p className="text-gray-400 text-sm">{link.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-purple-400 ml-auto" />
              </a>
            ))}

            {/* Email Card */}
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white mb-1">Direct Email</h3>
                <p className="text-gray-400 text-sm">
                  For formal inquiries or detailed discussions
                </p>
              </div>
              <a 
                href="mailto:spiff.azeta@gmail.com"
                className="inline-flex items-center text-purple-400 hover:text-purple-300"
              >
                <Mail className="h-5 w-5 mr-2" />
                spiff.azeta@gmail.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-black/40 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;