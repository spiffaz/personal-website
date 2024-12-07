export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: React.ReactNode;
    date: string;
    readTime: string;
    author: {
      name: string;
      image: string;
    };
    category: string;
    tags: string[];
  }