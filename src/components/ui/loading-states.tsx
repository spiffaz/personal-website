import { Terminal } from "lucide-react";

interface GridLoaderProps {
  columns?: number;
  rows?: number;
}

const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center">
    <div className="text-center">
      <Terminal className="h-12 w-12 text-purple-400 mx-auto mb-4 animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 w-48 bg-purple-500/20 rounded animate-pulse mx-auto"></div>
        <div className="h-4 w-32 bg-purple-500/20 rounded animate-pulse mx-auto"></div>
      </div>
    </div>
  </div>
);

const ContentLoader = () => (
  <div className="space-y-4 animate-pulse">
    <div className="h-8 w-3/4 bg-purple-500/20 rounded"></div>
    <div className="space-y-2">
      <div className="h-4 w-full bg-purple-500/20 rounded"></div>
      <div className="h-4 w-5/6 bg-purple-500/20 rounded"></div>
      <div className="h-4 w-4/6 bg-purple-500/20 rounded"></div>
    </div>
  </div>
);

const CardLoader = () => (
  <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
    <div className="animate-pulse space-y-4">
      <div className="h-6 w-1/4 bg-purple-500/20 rounded"></div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-purple-500/20 rounded"></div>
        <div className="h-4 w-5/6 bg-purple-500/20 rounded"></div>
      </div>
      <div className="flex space-x-2">
        <div className="h-8 w-8 bg-purple-500/20 rounded-full"></div>
        <div className="h-8 w-24 bg-purple-500/20 rounded"></div>
      </div>
    </div>
  </div>
);

const GridLoader = ({ columns = 3, rows = 2 }: GridLoaderProps) => (
  <div className={`grid md:grid-cols-${columns} gap-6`}>
    {Array.from({ length: columns * rows }).map((_, i) => (
      <CardLoader key={i} />
    ))}
  </div>
);

// Create named object for loading components
const LoadingStates = {
  PageLoader,
  ContentLoader,
  CardLoader,
  GridLoader
};

// Export the named object as default
export default LoadingStates;