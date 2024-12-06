'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import MDXContent from '@/components/MDXContent';
import Navigation from '@/components/Navigation';
import type { BlogPost } from '@/lib/blog';

interface BlogPostDetailProps {
  post: BlogPost;
}

export default function BlogPostDetail({ post }: BlogPostDetailProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}>
        <Navigation />
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <header className="py-32">
          <Link href="/blog" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-purple-400 mb-4">
              <span className="px-3 py-1 bg-purple-500/20 rounded-full">{post.category}</span>
              <span>•</span>
              <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative h-12 w-12">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  sizes="(max-width: 48px) 100vw"
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-8 pb-16">
          {/* Article Content */}
          <article className="md:col-span-3">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
              {post.content && <MDXContent source={post.content} />}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Author Card */}
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-lg font-bold text-white mb-4">About the Author</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative h-16 w-16">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    sizes="(max-width: 64px) 100vw"
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  {post.author.bio && (
                    <p className="text-sm text-gray-400">{post.author.bio}</p>
                  )}
                </div>
              </div>
              {post.author.social && (
                <div className="flex space-x-4">
                  {post.author.social.github && (
                    <a 
                      href={post.author.social.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {post.author.social.twitter && (
                    <a 
                      href={post.author.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {post.author.social.linkedin && (
                    <a 
                      href={post.author.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-lg font-bold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}