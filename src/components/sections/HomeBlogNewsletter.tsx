import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogPreview = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="flex justify-between items-end mb-12">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Latest Insights</h2>
        <p className="text-gray-400">Thoughts and tutorials on DevOps practices</p>
      </div>
      <a 
        href="/blog" 
        className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
      >
        View all posts
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          category: "DevOps",
          readTime: "5 min read",
          title: "Optimizing Kubernetes Resource Management",
          description: "Learn how to effectively manage and optimize resource allocation in your Kubernetes clusters.",
          link: "/blog/kubernetes-optimization"
        },
        {
          category: "Cloud",
          readTime: "4 min read",
          title: "AWS Cost Optimization Strategies",
          description: "Discover practical strategies to reduce your AWS infrastructure costs without compromising performance.",
          link: "/blog/aws-cost-optimization"
        },
        {
          category: "Automation",
          readTime: "6 min read",
          title: "Building Robust CI/CD Pipelines",
          description: "A comprehensive guide to creating reliable and efficient CI/CD pipelines for your projects.",
          link: "/blog/cicd-pipelines"
        }
      ].map((post, index) => (
        <article 
          key={index} 
          className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
        >
          <div className="text-purple-400 text-sm mb-4">
            {post.category} • {post.readTime}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            {post.title}
          </h3>
          <p className="text-gray-400 mb-4">
            {post.description}
          </p>
          <a 
            href={post.link} 
            className="text-purple-400 hover:text-purple-300 inline-flex items-center"
          >
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </article>
      ))}
    </div>
  </section>
);

const NewsletterSection = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-gray-300 mb-8">
          Subscribe to my newsletter for monthly DevOps insights, tutorials, and industry best practices.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="your.email@example.com"
            className="flex-1 px-4 py-3 bg-black/40 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="text-gray-400 text-sm mt-4">
          Join 2,000+ developers and DevOps engineers getting monthly updates.
        </p>
      </div>
    </div>
  </section>
);

export default function MissingHomeSections() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      <BlogPreview />
      <NewsletterSection />
    </div>
  );
}