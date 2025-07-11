// src/components/ui/phone-input.tsx - Fixed styling to match other fields
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
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

  // Use ref to track if we're initializing to prevent infinite loops
  const isInitializing = useRef(false);
  const lastProcessedValue = useRef('');

  // Memoize the onChange callback to prevent infinite re-renders
  const memoizedOnChange = useCallback(onChange, []);

  // Initialize phone number from value prop only once or when value changes externally
  useEffect(() => {
    // Skip if we're already processing this value
    if (value === lastProcessedValue.current) return;

    // Skip if the value matches current internal state
    const currentFullNumber =
      `${selectedCountry.dialCode} ${phoneNumber}`.trim();
    if (value === currentFullNumber) return;

    isInitializing.current = true;
    lastProcessedValue.current = value;

    if (value && value.trim() !== '') {
      // Parse existing value to extract country and number
      const trimmedValue = value.trim();

      // Find the country that matches the start of the value
      const matchingCountry = countries.find((country) =>
        trimmedValue.startsWith(country.dialCode)
      );

      if (matchingCountry) {
        // Extract the number part after the dial code
        const numberPart = trimmedValue
          .substring(matchingCountry.dialCode.length)
          .trim();

        setSelectedCountry(matchingCountry);
        setPhoneNumber(numberPart);
      } else {
        // If no country found, treat as plain number for current country
        setPhoneNumber(trimmedValue);
      }
    } else {
      // Clear the phone number if value is empty
      setPhoneNumber('');
    }

    isInitializing.current = false;
  }, [value, selectedCountry.dialCode, phoneNumber]);

  // Update validation and call onChange when phone number or country changes
  useEffect(() => {
    // Skip during initialization to prevent loops
    if (isInitializing.current) return;

    const fullNumber = phoneNumber
      ? `${selectedCountry.dialCode} ${phoneNumber}`.trim()
      : selectedCountry.dialCode;

    const valid =
      phoneNumber.length > 0 &&
      validatePhoneNumber(phoneNumber, selectedCountry);

    setIsValid(valid);

    // Only call onChange if the full number is different from what was passed in
    if (fullNumber !== lastProcessedValue.current) {
      lastProcessedValue.current = fullNumber;
      memoizedOnChange(fullNumber, valid, selectedCountry);
    }
  }, [phoneNumber, selectedCountry, memoizedOnChange]);

  const handleCountryChange = useCallback((country: Country) => {
    setSelectedCountry(country);
    // Keep the current phone number when country changes
    // This provides better UX than clearing it
  }, []);

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let inputValue = e.target.value;

      // Remove any non-digit characters except spaces, hyphens, and parentheses
      inputValue = inputValue.replace(/[^\d\s\-\(\)]/g, '');

      // Apply country-specific formatting if available
      if (selectedCountry.format && inputValue.length > 0) {
        inputValue = formatPhoneNumber(inputValue, selectedCountry.format);
      }

      setPhoneNumber(inputValue);
    },
    [selectedCountry.format]
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const getPlaceholder = useCallback(() => {
    if (placeholder) return placeholder;
    if (selectedCountry.format) {
      return selectedCountry.format.replace(/#/g, '0');
    }
    return 'Enter phone number';
  }, [placeholder, selectedCountry.format]);

  // Calculate padding based on dial code length
  const dialCodeWidth = selectedCountry.dialCode.length * 8 + 32;

  return (
    <div className={cn('space-y-4', className)}>
      {/* Side by Side Layout for Large Screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          <div className="relative flex">
            {/* Dial Code Display - with left border radius */}
            <div className="flex items-center px-3 bg-muted border border-r-0 border-border rounded-l-lg">
              <span className="text-body-sm font-medium text-foreground whitespace-nowrap">
                {selectedCountry.dialCode}
              </span>
            </div>

            {/* Phone Input - with right border radius and proper padding */}
            <input
              type="tel"
              name={name}
              value={phoneNumber}
              onChange={handlePhoneChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={getPlaceholder()}
              required={required}
              disabled={disabled}
              className={cn(
                'flex-1 pl-4 pr-10 py-3 bg-muted border border-border rounded-r-lg text-foreground placeholder-muted-foreground transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                disabled && 'opacity-50 cursor-not-allowed',
                // Consistent validation states like other fields
                !isValid &&
                  phoneNumber.length > 0 &&
                  !isFocused &&
                  'border-red-500 focus:border-red-500 focus:ring-red-500',
                isValid &&
                  phoneNumber.length > 0 &&
                  !isFocused &&
                  'border-green-500'
              )}
            />

            {/* Validation Indicator - Match the style of other field indicators */}
            {phoneNumber.length > 0 && !isFocused && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {isValid ? (
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                ) : (
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                )}
              </div>
            )}
          </div>

          {/* Validation Message - Consistent with other field validation */}
          {phoneNumber.length > 0 && !isValid && !isFocused && (
            <p className="text-body-sm text-red-500 mt-1">
              Please enter a valid phone number for {selectedCountry.name}
            </p>
          )}

          {/* Format Hint - Only show when focused and empty */}
          {selectedCountry.format && phoneNumber.length === 0 && isFocused && (
            <p className="text-body-sm text-muted-foreground mt-1">
              Format: {selectedCountry.format.replace(/#/g, '0')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
