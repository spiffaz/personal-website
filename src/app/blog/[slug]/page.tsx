import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostDetail from '@/components/sections/BlogPostDetail';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
  };
  tags: string[];
}

// Generate metadata for the page
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | DevOps Blog`,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    keywords: post.tags,
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

// Page component
async function BlogPost({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return <BlogPostDetail post={post} />;
}

export default BlogPost;