// src/app/blog/layout.tsx
export const metadata = {
    title: 'Blog - DevOps Portfolio',
    description: 'Insights and tutorials about DevOps, cloud infrastructure, and automation.',
  };
  
  export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return children;
  }