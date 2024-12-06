import { Terminal, AlertTriangle, ArrowLeft, Home } from "lucide-react";

const ErrorLayout = ({ code, title, description, children }) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center">
    <div className="max-w-2xl mx-auto px-4 text-center">
      <div className="mb-8">
        <Terminal className="h-16 w-16 text-purple-400 mx-auto mb-4" />
        <h1 className="text-6xl font-bold text-white mb-4">{code}</h1>
        <p className="text-2xl text-purple-300 mb-2">{title}</p>
        <p className="text-gray-300">{description}</p>
      </div>
      
      {children}

      <div className="flex items-center justify-center space-x-4 mt-8">
        <a 
          href="/"
          className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
        >
          <Home className="h-4 w-4 mr-2" />
          Back to Home
        </a>
        <button 
          onClick={() => window.history.back()}
          className="flex items-center px-4 py-2 border border-purple-400 hover:bg-purple-400/10 rounded-lg text-purple-300 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Go Back
        </button>
      </div>
    </div>
  </div>
);

export const NotFound = () => (
  <ErrorLayout
    code="404"
    title="Page Not Found"
    description="The page you're looking for doesn't exist or has been moved."
  >
    <div className="grid md:grid-cols-2 gap-4 mt-8 mb-8">
      <a 
        href="/projects"
        className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
      >
        <h3 className="text-lg font-bold text-white mb-2">View Projects</h3>
        <p className="text-gray-300">Check out my latest DevOps and cloud infrastructure projects.</p>
      </a>
      <a 
        href="/blog"
        className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
      >
        <h3 className="text-lg font-bold text-white mb-2">Read Blog</h3>
        <p className="text-gray-300">Explore tutorials and insights about DevOps practices.</p>
      </a>
    </div>
  </ErrorLayout>
);

export const ServerError = () => (
  <ErrorLayout
    code="500"
    title="Server Error"
    description="Something went wrong on our end. Please try again later."
  >
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
  </ErrorLayout>
);

export default {
  NotFound,
  ServerError
};