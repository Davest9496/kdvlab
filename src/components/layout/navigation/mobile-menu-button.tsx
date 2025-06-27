'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'lg:hidden flex items-center justify-center w-10 h-10 rounded-xl',
        'bg-white/[0.08] border border-white/[0.12]',
        'hover:bg-white/[0.12] hover:border-white/[0.2]',
        'transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-primary/50'
      )}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-5 h-5 text-white" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Menu className="w-5 h-5 text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
