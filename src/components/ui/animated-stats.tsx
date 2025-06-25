'use client';

import { useEffect, useRef, useState } from 'react';

// Hook for counter animation with intersection observer
const useCounterAnimation = (
  end: number,
  duration: number = 2000,
  start: number = 0,
  delay: number = 0
) => {
  const [count, setCount] = useState(start);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    const timeoutId = setTimeout(() => {
      const startTime = Date.now();
      const startValue = start;
      const endValue = end;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out cubic for smooth deceleration)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(
          startValue + (endValue - startValue) * easeOut
        );

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [shouldAnimate, start, end, duration, delay]);

  return { count, setShouldAnimate };
};

// Intersection observer hook for triggering animations
const useIntersectionObserver = (
  callback: () => void,
  options: { threshold?: number; rootMargin?: string } = {}
) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          callback();
          hasTriggered.current = true;
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [callback, options.threshold, options.rootMargin]);

  return elementRef;
};

// Individual animated counter component that matches your existing styling
const AnimatedCounter = ({
  value,
  label,
  suffix = '',
  duration = 2000,
  delay = 0,
  onStart,
}: {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  onStart?: () => void;
}) => {
  const { count, setShouldAnimate } = useCounterAnimation(
    value,
    duration,
    0,
    delay
  );

  useEffect(() => {
    if (onStart) {
      const timeoutId = setTimeout(() => {
        setShouldAnimate(true);
        onStart();
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [onStart, delay]);

  return (
    <div className="text-center lg:text-left group">
      <div
        className="text-heading-md text-gradient font-gilroy-bold transition-all duration-300 group-hover:scale-105"
        style={{ transform: 'translateZ(0)' }} // GPU acceleration
      >
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1 transition-colors duration-300 group-hover:text-muted-foreground/80">
        {label}
      </div>
    </div>
  );
};

// Main animated stats component that preserves your exact structure
export const AnimatedStatsSection = () => {
  const [animationStates, setAnimationStates] = useState([false, false, false]);

  // Function to start all animations with stagger
  const startAnimations = () => {
    // Start first counter immediately
    setAnimationStates((prev) => {
      const newStates = [...prev];
      newStates[0] = true;
      return newStates;
    });

    // Start second counter after 200ms
    setTimeout(() => {
      setAnimationStates((prev) => {
        const newStates = [...prev];
        newStates[1] = true;
        return newStates;
      });
    }, 200);

    // Start third counter after 400ms
    setTimeout(() => {
      setAnimationStates((prev) => {
        const newStates = [...prev];
        newStates[2] = true;
        return newStates;
      });
    }, 400);
  };

  // Set up intersection observer
  const containerRef = useIntersectionObserver(startAnimations, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
    >
      <AnimatedCounter
        value={50}
        label="Projects Delivered"
        suffix="+"
        duration={2000}
        onStart={animationStates[0] ? () => {} : undefined}
      />
      <AnimatedCounter
        value={5}
        label="Years Experience"
        suffix="+"
        duration={2000}
        onStart={animationStates[1] ? () => {} : undefined}
      />
      <AnimatedCounter
        value={99}
        label="Client Satisfaction"
        suffix="%"
        duration={2000}
        onStart={animationStates[2] ? () => {} : undefined}
      />
    </div>
  );
};

// Performance-optimized version (alternative implementation)
export const OptimizedAnimatedStatsSection = () => {
  const stats = [
    { value: 50, label: 'Projects Delivered', suffix: '+' },
    { value: 5, label: 'Years Experience', suffix: '+' },
    { value: 99, label: 'Client Satisfaction', suffix: '%' },
  ];

  const [counters, setCounters] = useState([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  const containerRef = useIntersectionObserver(() => {
    if (!hasAnimated.current) {
      setIsVisible(true);
      hasAnimated.current = true;
    }
  });

  useEffect(() => {
    if (!isVisible) return;

    const animations = stats.map((stat, index) => {
      const startTime = Date.now() + index * 200; // 200ms stagger
      const duration = 2000;

      const animate = () => {
        const now = Date.now();
        if (now < startTime) {
          requestAnimationFrame(animate);
          return;
        }

        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(stat.value * easeOut);

        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = currentValue;
          return newCounters;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      return animate;
    });

    // Start all animations
    animations.forEach((animate) => requestAnimationFrame(animate));
  }, [isVisible, stats]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
    >
      {stats.map((stat, index) => (
        <div key={stat.label} className="text-center lg:text-left group">
          <div className="text-heading-md text-gradient font-gilroy-bold transition-transform duration-300 group-hover:scale-105">
            {counters[index]}
            {stat.suffix}
          </div>
          <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};


export const AccessibleAnimatedStatsSection = () => {
  const [counters, setCounters] = useState([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const hasAnimated = useRef(false);

  const containerRef = useIntersectionObserver(() => {
    if (!hasAnimated.current) {
      setIsVisible(true);
      setIsAnimating(true);
      hasAnimated.current = true;
    }
  });

  const stats = [
    { value: 50, label: 'Projects Delivered', suffix: '+' },
    { value: 5, label: 'Years Experience', suffix: '+' },
    { value: 99, label: 'Client Satisfaction', suffix: '%' },
  ];

  useEffect(() => {
    if (!isVisible) return;

    const animations = stats.map((stat, index) => {
      const startTime = Date.now() + index * 200;
      const duration = 2000;

      const animate = () => {
        const now = Date.now();
        if (now < startTime) {
          requestAnimationFrame(animate);
          return;
        }

        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(stat.value * easeOut);

        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = currentValue;
          return newCounters;
        });

        if (progress >= 1 && index === stats.length - 1) {
          setIsAnimating(false);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      return animate;
    });

    animations.forEach((animate) => requestAnimationFrame(animate));
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
      role="region"
      aria-label="Company statistics"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center lg:text-left group"
          role="group"
          aria-label={`${stat.label}: ${counters[index]}${stat.suffix}`}
        >
          <div
            className="text-heading-md text-gradient font-gilroy-bold transition-transform duration-300 group-hover:scale-105"
            aria-live={isAnimating ? 'polite' : 'off'}
            aria-atomic="true"
          >
            {counters[index]}
            {stat.suffix}
          </div>
          <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};