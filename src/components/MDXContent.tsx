// src/components/MDXContent.tsx
'use client';

import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type MDXContentProps = {
  source: any;
};

const components = {
  pre: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  code: ({ className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    const codeString = React.isValidElement(children) 
      ? children.props.children 
      : String(children);

    return match ? (
      <SyntaxHighlighter
        language={match[1]}
        style={nightOwl}
        PreTag="div"
        className="rounded-lg"
        {...props}
      >
        {codeString}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default function MDXContent({ source }: MDXContentProps) {
  if (!source) return null;
  
  return (
    <div className="prose prose-invert max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  );
}