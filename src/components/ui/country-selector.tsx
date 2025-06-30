'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, Search, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { countries, type Country } from '@/data/countries';
import { cn } from '@/lib/utils';

interface CountrySelectorProps {
  selectedCountry: Country;
  onCountryChange: (country: Country) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -10,
    transition: {
      duration: 0.15,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

export default function CountrySelector({
  selectedCountry,
  onCountryChange,
  className,
  placeholder = 'Select country',
  disabled = false,
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter countries based on search term
  useEffect(() => {
    const filtered = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.dialCode.includes(searchTerm) ||
        country.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
    setHighlightedIndex(0);
  }, [searchTerm]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Memoize handleCountrySelect to fix lint warning
  const handleCountrySelect = useCallback(
    (country: Country) => {
      onCountryChange(country);
      setIsOpen(false);
      setSearchTerm('');
    },
    [onCountryChange]
  );

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev < filteredCountries.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredCountries.length - 1
          );
          break;
        case 'Enter':
          event.preventDefault();
          if (filteredCountries[highlightedIndex]) {
            handleCountrySelect(filteredCountries[highlightedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setSearchTerm('');
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, highlightedIndex, filteredCountries, handleCountrySelect]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setSearchTerm('');
    }
  };

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      {/* Selected Country Display */}
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={cn(
          'w-full flex items-center justify-between px-4 py-3 bg-muted border border-border rounded-lg transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
          disabled
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:border-primary/50 cursor-pointer',
          isOpen && 'ring-2 ring-primary border-transparent'
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{selectedCountry.flag}</span>
          <div className="text-left">
            <div className="text-body-sm font-medium text-foreground">
              {selectedCountry.name}
            </div>
            <div className="text-body-sm text-muted-foreground">
              {selectedCountry.dialCode}
            </div>
          </div>
        </div>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-muted-foreground transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-2xl z-50 max-h-80 overflow-hidden"
          >
            {/* Search Input */}
            <div className="p-3 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search countries..."
                  className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-md text-body-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Countries List */}
            <div className="overflow-y-auto max-h-60" role="listbox">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country, index) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleCountrySelect(country)}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150',
                      'hover:bg-muted focus:bg-muted focus:outline-none',
                      highlightedIndex === index && 'bg-muted',
                      selectedCountry.code === country.code && 'bg-primary/10'
                    )}
                    role="option"
                    aria-selected={selectedCountry.code === country.code}
                  >
                    <span className="text-lg">{country.flag}</span>
                    <div className="flex-1">
                      <div className="text-body-sm font-medium text-foreground">
                        {country.name}
                      </div>
                      <div className="text-body-sm text-muted-foreground">
                        {country.dialCode}
                      </div>
                    </div>
                    {selectedCountry.code === country.code && (
                      <Check className="w-4 h-4 text-primary" />
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-body-sm text-muted-foreground">
                  No countries found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
