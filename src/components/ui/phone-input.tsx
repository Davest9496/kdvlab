// src/components/ui/phone-input.tsx
'use client';

import { useState, useEffect } from 'react';
import {
  countries,
  getCountryByCode,
  formatPhoneNumber,
  validatePhoneNumber,
  type Country,
} from '@/data/countries';
import CountrySelector from './country-selector';
import { cn } from '@/lib/utils';

interface PhoneInputProps {
  value: string;
  onChange: (value: string, isValid: boolean, country: Country) => void;
  defaultCountry?: string; // Country code
  className?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  name?: string;
}

export default function PhoneInput({
  value,
  onChange,
  defaultCountry = 'PT', // Default to Portugal
  className,
  placeholder,
  required = false,
  disabled = false,
  name = 'phone',
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    getCountryByCode(defaultCountry) || countries[0]
  );
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Initialize phone number from value prop
  useEffect(() => {
    if (value && value !== `${selectedCountry.dialCode} ${phoneNumber}`) {
      // Parse existing value to extract country and number
      const parts = value.split(' ');
      if (parts.length >= 2) {
        const dialCode = parts[0];
        const number = parts.slice(1).join(' ');
        const country = countries.find((c) => c.dialCode === dialCode);

        if (country) {
          setSelectedCountry(country);
          setPhoneNumber(number);
        }
      }
    }
  }, [value, selectedCountry.dialCode, phoneNumber]);

  // Update validation and call onChange when phone number or country changes
  useEffect(() => {
    const fullNumber = `${selectedCountry.dialCode} ${phoneNumber}`.trim();
    const valid =
      phoneNumber.length > 0 &&
      validatePhoneNumber(phoneNumber, selectedCountry);

    setIsValid(valid);
    onChange(fullNumber, valid, selectedCountry);
  }, [phoneNumber, selectedCountry, onChange]);

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
    // Clear phone number when country changes for better UX
    setPhoneNumber('');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Remove any non-digit characters except spaces, hyphens, and parentheses
    inputValue = inputValue.replace(/[^\d\s\-\(\)]/g, '');

    // Apply country-specific formatting if available
    if (selectedCountry.format && inputValue.length > 0) {
      inputValue = formatPhoneNumber(inputValue, selectedCountry.format);
    }

    setPhoneNumber(inputValue);
  };

  const getPlaceholder = () => {
    if (placeholder) return placeholder;
    if (selectedCountry.format) {
      return selectedCountry.format.replace(/#/g, '0');
    }
    return 'Enter phone number';
  };

  return (
    <div className={cn('space-y-2', className)}>
      {/* Country Selector */}
      <div>
        <label className="block text-body-sm font-medium text-foreground mb-2">
          Country
        </label>
        <CountrySelector
          selectedCountry={selectedCountry}
          onCountryChange={handleCountryChange}
          disabled={disabled}
        />
      </div>

      {/* Phone Number Input */}
      <div>
        <label className="block text-body-sm font-medium text-foreground mb-2">
          Phone Number{required && '*'}
        </label>
        <div className="relative">
          {/* Dial Code Display */}
          <div className="absolute left-0 top-0 bottom-0 flex items-center px-4 bg-muted border border-r-0 border-border rounded-l-lg z-10">
            <span className="text-body-sm font-medium text-foreground">
              {selectedCountry.dialCode}
            </span>
          </div>

          {/* Phone Input */}
          <input
            type="tel"
            name={name}
            value={phoneNumber}
            onChange={handlePhoneChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={getPlaceholder()}
            required={required}
            disabled={disabled}
            className={cn(
              'w-full pl-20 pr-4 py-3 bg-muted border border-border rounded-r-lg text-foreground placeholder-muted-foreground transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
              disabled && 'opacity-50 cursor-not-allowed',
              !isValid &&
                phoneNumber.length > 0 &&
                !isFocused &&
                'border-red-500',
              isValid && phoneNumber.length > 0 && 'border-green-500'
            )}
            style={{
              paddingLeft: `${selectedCountry.dialCode.length * 8 + 32}px`,
            }}
          />

          {/* Validation Indicator */}
          {phoneNumber.length > 0 && !isFocused && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {isValid ? (
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              ) : (
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              )}
            </div>
          )}
        </div>

        {/* Validation Message */}
        {phoneNumber.length > 0 && !isValid && !isFocused && (
          <p className="text-body-sm text-red-500 mt-1">
            Please enter a valid phone number for {selectedCountry.name}
          </p>
        )}

        {/* Format Hint */}
        {selectedCountry.format && phoneNumber.length === 0 && (
          <p className="text-body-sm text-muted-foreground mt-1">
            Format: {selectedCountry.format.replace(/#/g, '0')}
          </p>
        )}
      </div>
    </div>
  );
}
