// src/lib/blog.ts
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: {
    name: string;
    image: string;
    bio?: string;
    social?: {
      github?: string;
      twitter?: string;
      linkedin?: string;
    };
  };
  category: string;
  tags: string[];
  readTime: string;
  content?: any; // MDX content
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const files = await fs.readdir(postsDirectory);
    if (!files.length) {
      console.log('No blog posts found');
      return [];
    }

    const posts = await Promise.all(
      files
        .filter((filename) => filename.endsWith('.mdx'))
        .map(async (filename) => {
          try {
            const slug = filename.replace(/\.mdx$/, '');
            const fullPath = path.join(postsDirectory, filename);
            const fileContents = await fs.readFile(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
              slug,
              ...data,
              author: {
                ...data.author,
                image: data.author?.image || '/images/avatar.png'
              }
            } as BlogPost;
          } catch (error) {
            console.error(`Error processing ${filename}:`, error);
            return null;
          }
        })
    );

    return posts
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Serialize the MDX content
    const mdxSource = await serialize(content, {
      parseFrontmatter: true,
      scope: data
    });

    return {
      slug,
      ...data,
      content: mdxSource,
      author: {
        ...data.author,
        image: data.author?.image || '/images/avatar.png'
      }
    } as BlogPost;
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error);
    return null;
  }
}