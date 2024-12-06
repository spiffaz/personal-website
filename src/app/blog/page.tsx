// src/app/blog/page.tsx
import BlogList from '@/components/sections/BlogList';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog - DevOps Insights',
  description: 'DevOps engineering insights, tutorials, and best practices'
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      <BlogList posts={posts} featuredPost={posts[0]} />
    </div>
  );
}