import { notFound } from 'next/navigation';
import BlogPostDetail from '@/components/sections/BlogPostDetail';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return <BlogPostDetail post={post} />;
}