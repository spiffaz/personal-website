// src/app/loading.tsx
export default function Loading() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 text-purple-400 mx-auto mb-4 animate-pulse">
            {/* Simple loading animation */}
            <div className="w-full h-full rounded-full border-4 border-current border-r-transparent animate-spin" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-48 bg-purple-500/20 rounded animate-pulse mx-auto"></div>
            <div className="h-4 w-32 bg-purple-500/20 rounded animate-pulse mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }