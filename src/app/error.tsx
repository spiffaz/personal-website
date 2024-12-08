'use client';  // Must be at the very top

import { Terminal, AlertTriangle, Home } from "lucide-react";
import Link from 'next/link'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Terminal className="h-16 w-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-white mb-4">500</h1>
          <p className="text-2xl text-purple-300 mb-2">Server Error</p>
          <p className="text-gray-300">Something went wrong on our end. Please try again later.</p>
        </div>

        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 mt-8 mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertTriangle className="h-5 w-5 text-purple-400" />
            <p className="text-purple-300 font-medium">Error Details</p>
          </div>
          <p className="text-gray-300">
            Our team has been notified and we're working to fix the issue. 
            If you need immediate assistance, please contact me through any of the social links below.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={reset}
            className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
          >
            Try Again
          </button>
          <Link 
            href="/"
            className="flex items-center px-4 py-2 border border-purple-400 hover:bg-purple-400/10 rounded-lg text-purple-300 transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}