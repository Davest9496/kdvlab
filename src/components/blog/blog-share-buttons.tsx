'use client';

import {
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon,
  Check,
} from 'lucide-react';
import { useState } from 'react';

interface BlogShareButtonsProps {
  url: string;
  title: string;
  description: string;
}

export const BlogShareButtons: React.FC<BlogShareButtonsProps> = ({
  url,
  title,
}) => {
  const [copied, setCopied] = useState(false);

  const shareButtons = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      color:
        'hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-400/30',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color:
        'hover:bg-blue-600/10 hover:text-blue-500 hover:border-blue-500/30',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color:
        'hover:bg-blue-700/10 hover:text-blue-600 hover:border-blue-600/30',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex items-center space-x-2 text-muted-foreground">
        <Share2 className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium">Share this article:</span>
      </div>

      <div className="flex items-center gap-3">
        {shareButtons.map((button) => (
          <a
            key={button.name}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center w-11 h-11 rounded-xl 
              bg-muted/40 border border-border/50 text-muted-foreground 
              backdrop-blur-sm transition-all duration-300 
              hover:scale-105 hover:shadow-lg ${button.color}
            `}
            aria-label={`Share on ${button.name}`}
          >
            <button.icon className="w-5 h-5" />
          </a>
        ))}

        <button
          onClick={copyToClipboard}
          className={`
            flex items-center justify-center w-11 h-11 rounded-xl 
            border backdrop-blur-sm transition-all duration-300 
            hover:scale-105 hover:shadow-lg
            ${
              copied
                ? 'bg-green-500/10 text-green-400 border-green-400/30'
                : 'bg-muted/40 border-border/50 text-muted-foreground hover:bg-muted/60 hover:border-border/70'
            }
          `}
          aria-label="Copy link"
        >
          {copied ? (
            <Check className="w-5 h-5" />
          ) : (
            <LinkIcon className="w-5 h-5" />
          )}
        </button>

        {copied && (
          <span className="text-sm text-green-400 font-medium ml-2 animate-fade-in">
            Link copied!
          </span>
        )}
      </div>
    </div>
  );
};
