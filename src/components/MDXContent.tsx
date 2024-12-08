import React, { ReactElement } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

interface CodeProps {
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

type ReactElementWithStringChildren = ReactElement & {
  props: {
    children: string;
  };
};

function isReactElementWithStringChildren(
  element: unknown
): element is ReactElementWithStringChildren {
  return (
    React.isValidElement(element) &&
    typeof (element as ReactElementWithStringChildren).props?.children === 'string'
  );
}

const components = {
  pre: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  code: ({ className, children, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || '');
    let codeString = '';
    
    if (isReactElementWithStringChildren(children)) {
      codeString = children.props.children;
    } else {
      codeString = String(children);
    }

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