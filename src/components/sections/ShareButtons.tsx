import React from 'react';
import { Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

type SharePlatform = 'twitter' | 'linkedin' | 'copy';

interface ShareUrls {
  twitter: string;
  linkedin: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
  const handleShare = async (platform: SharePlatform) => {
    const shareText = `Check out this article: ${title}`;
    
    const shareUrls: ShareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        // You can add a toast notification here if desired
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
      return;
    }

    window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => handleShare('twitter')}
        className="p-2 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5 text-purple-400" />
      </button>
      <button
        onClick={() => handleShare('linkedin')}
        className="p-2 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-5 w-5 text-purple-400" />
      </button>
      <button
        onClick={() => handleShare('copy')}
        className="p-2 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-colors"
        aria-label="Copy link"
      >
        <LinkIcon className="h-5 w-5 text-purple-400" />
      </button>
    </div>
  );
};

export default ShareButtons;