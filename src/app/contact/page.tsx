"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Github, Linkedin, Mail, Twitter, ArrowRight, MapPin, Calendar, Clock, Loader2, AlertCircle, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Link from 'next/link'

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

const ContactPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  });

  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormState({
      isLoading: true,
      isSuccess: false,
      isError: false,
      errorMessage: ''
    });

    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormState({
        isLoading: false,
        isSuccess: true,
        isError: false,
        errorMessage: ''
      });

      // Show success state briefly before redirecting
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/contact/success');

    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message. Please try again later.';
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/40 backdrop-blur-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <Navigation />
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Let's Connect</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Whether you want to discuss DevOps practices, collaborate on a project, or just say hello,
            I'm always open to connecting with fellow technology enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {availabilityInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 transform transition-all duration-300 hover:scale-105"
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
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex items-center space-x-4 transform hover:scale-[1.02]"
              >
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <link.icon className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{link.name}</h3>
                  <p className="text-gray-400 text-sm">{link.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-purple-400 ml-auto transform transition-all duration-300 group-hover:translate-x-2" />
              </Link>
            ))}

            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 transform transition-all duration-300 hover:scale-[1.02]">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white mb-1">Direct Email</h3>
                <p className="text-gray-400 text-sm">
                  For formal inquiries or detailed discussions
                </p>
              </div>
              <Link 
                href="mailto:spiff.azeta@gmail.com"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                spiff.azeta@gmail.com
              </Link>
            </div>
          </div>

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
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={formState.isLoading}
                  className="w-full px-4 py-2 bg-black/40 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white disabled:opacity-50"
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
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={formState.isLoading}
                  className="w-full px-4 py-2 bg-black/40 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white disabled:opacity-50"
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
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={formState.isLoading}
                  rows={4}
                  className="w-full px-4 py-2 bg-black/40 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              {formState.isError && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span>{formState.errorMessage}</span>
                </div>
              )}

              {formState.isSuccess && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <span>Message sent successfully! Redirecting...</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formState.isLoading}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState.isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;