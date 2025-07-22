// src/components/ui/toast.tsx
'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  success: (message: string, options?: Partial<Toast>) => void;
  error: (message: string, options?: Partial<Toast>) => void;
  warning: (message: string, options?: Partial<Toast>) => void;
  info: (message: string, options?: Partial<Toast>) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast = { ...toast, id };

      setToasts(prev => [...prev, newToast]);

      // Auto remove after duration
      const duration = toast.duration ?? 5000;
      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [removeToast]
  );

  const success = useCallback(
    (message: string, options?: Partial<Toast>) => {
      addToast({ ...options, type: 'success', message });
    },
    [addToast]
  );

  const error = useCallback(
    (message: string, options?: Partial<Toast>) => {
      addToast({
        ...options,
        type: 'error',
        message,
        duration: options?.duration ?? 7000, // Error messages stay longer
      });
    },
    [addToast]
  );

  const warning = useCallback(
    (message: string, options?: Partial<Toast>) => {
      addToast({ ...options, type: 'warning', message });
    },
    [addToast]
  );

  const info = useCallback(
    (message: string, options?: Partial<Toast>) => {
      addToast({ ...options, type: 'info', message });
    },
    [addToast]
  );

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        success,
        error,
        warning,
        info,
      }}
    >
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

function ToastContainer() {
  const { toasts } = useToast();

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] flex flex-col-reverse items-end gap-2 p-4 sm:p-6">
      {toasts.map(toast => (
        <ToastComponent key={toast.id} toast={toast} />
      ))}
    </div>
  );
}

function ToastComponent({ toast }: { toast: Toast }) {
  const { removeToast } = useToast();
  const [isExiting, setIsExiting] = useState(false);

  const handleRemove = () => {
    setIsExiting(true);
    setTimeout(() => {
      removeToast(toast.id);
    }, 300);
  };

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const Icon = icons[toast.type];

  const typeStyles = {
    success: 'border-green-500/20 bg-green-500/10 text-green-400',
    error: 'border-red-500/20 bg-red-500/10 text-red-400',
    warning: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-400',
    info: 'border-blue-500/20 bg-blue-500/10 text-blue-400',
  };

  const iconStyles = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500',
  };

  return (
    <div
      className={cn(
        'pointer-events-auto relative flex w-full max-w-md items-start gap-3 rounded-lg border p-4 shadow-lg backdrop-blur-sm transition-all duration-300',
        typeStyles[toast.type],
        'animate-in slide-in-from-right-full',
        isExiting && 'opacity-0 animate-out slide-out-to-right-full'
      )}
      role="alert"
      aria-live="polite"
    >
      {/* Icon */}
      <Icon
        className={cn('mt-0.5 h-5 w-5 flex-shrink-0', iconStyles[toast.type])}
      />

      {/* Content */}
      <div className="flex-1 space-y-1">
        {toast.title && (
          <p className="font-semibold text-white">{toast.title}</p>
        )}
        <p className="text-sm leading-relaxed text-white/90">{toast.message}</p>

        {toast.action && (
          <button
            onClick={toast.action.onClick}
            className="mt-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            {toast.action.label}
          </button>
        )}
      </div>

      {/* Close button */}
      <button
        onClick={handleRemove}
        className="flex-shrink-0 rounded-md p-1 text-white/60 transition-colors hover:text-white"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Progress bar for timed toasts */}
      {toast.duration && toast.duration > 0 && (
        <div
          className={cn(
            'absolute bottom-0 left-0 h-1 rounded-b-lg',
            toast.type === 'success' && 'bg-green-500',
            toast.type === 'error' && 'bg-red-500',
            toast.type === 'warning' && 'bg-yellow-500',
            toast.type === 'info' && 'bg-blue-500'
          )}
          style={{
            animation: `shrink ${toast.duration}ms linear forwards`,
          }}
        />
      )}
    </div>
  );
}

// Helper function for form submissions
export function createFormToast() {
  return {
    loading: (message = 'Sending...') => ({
      type: 'info' as const,
      message,
      duration: 0, // Don't auto-remove
    }),
    success: (message = 'Message sent successfully!') => ({
      type: 'success' as const,
      message,
      duration: 5000,
    }),
    error: (message = 'Failed to send message. Please try again.') => ({
      type: 'error' as const,
      message,
      duration: 7000,
    }),
  };
}

// CSS for animations (add to globals.css)
export const toastStyles = `
@keyframes shrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

.animate-in {
  animation-duration: 300ms;
  animation-fill-mode: both;
}

.animate-out {
  animation-duration: 300ms;
  animation-fill-mode: forwards;
}

.slide-in-from-right-full {
  animation-name: slideInFromRight;
}

.slide-out-to-right-full {
  animation-name: slideOutToRight;
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutToRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
`;
