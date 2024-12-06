// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import BlogPostDetail from '@/components/sections/BlogPostDetail';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = await getAllPosts(); // Added await here
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug);
    
    if (!post) {
      return {};
    }

    return {
      title: `${post.title} - DevOps Blog`,
      description: post.excerpt,
    };
  } catch (error) {
    return {};
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug);

    if (!post) {
      notFound();
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
        <BlogPostDetail post={post} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}