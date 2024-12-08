"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';
import Navigation from '@/components/Navigation';

interface BlogListProps {
  posts: BlogPost[];
  featuredPost: BlogPost;
}

const FeaturedPost = ({ post }: { post: BlogPost }) => (
  <article className="bg-black/20 backdrop-blur-sm rounded-lg border border-purple-500/20 overflow-hidden transform transition-all duration-300 hover:border-purple-500/40 hover:scale-[1.02]">
    <div className="p-6">
      <div className="flex items-center space-x-2 text-sm text-purple-400 mb-4">
        <span className="px-3 py-1 bg-purple-500/20 rounded-full">{post.category}</span>
        <span>•</span>
        <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{post.readTime}</span>
      </div>
      
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-bold text-white mb-3 hover:text-purple-300 transition-colors">
          {post.title}
        </h2>
      </Link>
      
      <p className="text-gray-300 mb-4">{post.excerpt}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative h-10 w-10">
            <Image
              src={post.author.image}
              alt={post.author.name}
              className="rounded-full"
              fill
              sizes="40px"
              style={{ objectFit: 'cover' }}
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
        
        <Link href={`/blog/${post.slug}`} className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  </article>
);

const BlogPostCard = ({ post }: { post: BlogPost }) => (
  <article className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 transform transition-all duration-300 hover:border-purple-500/40 hover:scale-[1.02]">
    <div className="flex items-center space-x-2 text-sm text-purple-400 mb-4">
      <span className="px-3 py-1 bg-purple-500/20 rounded-full">{post.category}</span>
      <span>•</span>
      <span className="flex items-center"><Clock className="h-4 w-4 mr-1" />{post.readTime}</span>
    </div>
    
    <Link href={`/blog/${post.slug}`}>
      <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-300 transition-colors">
        {post.title}
      </h3>
    </Link>
    
    <p className="text-gray-300 mb-4">{post.excerpt}</p>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {post.tags.map((tag, tagIndex) => (
        <span 
          key={tagIndex}
          className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
    
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center space-x-3">
        <div className="relative h-8 w-8">
          <Image
            src={post.author.image}
            alt={post.author.name}
            className="rounded-full"
            fill
            sizes="32px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <span className="text-gray-300">{post.author.name}</span>
      </div>
      <span className="text-sm text-gray-400">{post.date}</span>
    </div>
  </article>
);

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => (
  <div className="relative mb-8">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Search className="h-5 w-5 text-gray-400" />
    </div>
    <input
      type="text"
      className="block w-full bg-black/20 border border-purple-500/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
      placeholder="Search posts..."
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

export const BlogList: React.FC<BlogListProps> = ({ posts, featuredPost }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  // Get unique categories from posts
  const categories = ['all', ...new Set(posts.map(post => post.category))];

  // Filter posts based on search query and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/40 backdrop-blur-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <Navigation />
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">DevOps Insights & Tutorials</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Practical guides, best practices, and insights into DevOps, cloud infrastructure, and automation.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <SearchBar onSearch={setSearchQuery} />
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600'
                    : 'bg-purple-500/20 hover:bg-purple-500/30'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {!searchQuery && selectedCategory === 'all' && (
          <div className="mb-12">
            <FeaturedPost post={featuredPost} />
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No posts found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;