'use client';

import { Terminal, Home, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Terminal className="h-16 w-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-2xl text-purple-300 mb-2">Page Not Found</p>
          <p className="text-gray-300">The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8 mb-8">
          <Link 
            href="/projects"
            className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-white mb-2">View Projects</h3>
            <p className="text-gray-300">Check out my latest DevOps and cloud infrastructure projects.</p>
          </Link>
          <Link
            href="/blog"
            className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-white mb-2">Read Blog</h3>
            <p className="text-gray-300">Explore tutorials and insights about DevOps practices.</p>
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-4 mt-8">
          <Link
            href="/"
            className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <button 
            onClick={() => router.back()}
            className="flex items-center px-4 py-2 border border-purple-400 hover:bg-purple-400/10 rounded-lg text-purple-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}