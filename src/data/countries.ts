export interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
  format?: string; // Phone number format for validation
}

export const countries: Country[] = [
  // Europe
  {
    code: 'PT',
    name: 'Portugal',
    flag: '🇵🇹',
    dialCode: '+351',
    format: '9## ### ###',
  },
  {
    code: 'ES',
    name: 'Spain',
    flag: '🇪🇸',
    dialCode: '+34',
    format: '### ### ###',
  },
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    dialCode: '+33',
    format: '# ## ## ## ##',
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    dialCode: '+49',
    format: '#### #######',
  },
  {
    code: 'IT',
    name: 'Italy',
    flag: '🇮🇹',
    dialCode: '+39',
    format: '### ### ####',
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    dialCode: '+44',
    format: '#### ######',
  },
  {
    code: 'NL',
    name: 'Netherlands',
    flag: '🇳🇱',
    dialCode: '+31',
    format: '# ########',
  },
  {
    code: 'BE',
    name: 'Belgium',
    flag: '🇧🇪',
    dialCode: '+32',
    format: '### ## ## ##',
  },
  {
    code: 'CH',
    name: 'Switzerland',
    flag: '🇨🇭',
    dialCode: '+41',
    format: '## ### ## ##',
  },
  {
    code: 'AT',
    name: 'Austria',
    flag: '🇦🇹',
    dialCode: '+43',
    format: '### ######',
  },
  {
    code: 'SE',
    name: 'Sweden',
    flag: '🇸🇪',
    dialCode: '+46',
    format: '##-### ## ##',
  },
  {
    code: 'NO',
    name: 'Norway',
    flag: '🇳🇴',
    dialCode: '+47',
    format: '### ## ###',
  },
  {
    code: 'DK',
    name: 'Denmark',
    flag: '🇩🇰',
    dialCode: '+45',
    format: '## ## ## ##',
  },
  {
    code: 'FI',
    name: 'Finland',
    flag: '🇫🇮',
    dialCode: '+358',
    format: '## ### ####',
  },
  {
    code: 'PL',
    name: 'Poland',
    flag: '🇵🇱',
    dialCode: '+48',
    format: '### ### ###',
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    flag: '🇨🇿',
    dialCode: '+420',
    format: '### ### ###',
  },
  {
    code: 'HU',
    name: 'Hungary',
    flag: '🇭🇺',
    dialCode: '+36',
    format: '## ### ####',
  },
  {
    code: 'RO',
    name: 'Romania',
    flag: '🇷🇴',
    dialCode: '+40',
    format: '### ### ###',
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    flag: '🇧🇬',
    dialCode: '+359',
    format: '## ### ####',
  },
  {
    code: 'GR',
    name: 'Greece',
    flag: '🇬🇷',
    dialCode: '+30',
    format: '### ### ####',
  },
  {
    code: 'IE',
    name: 'Ireland',
    flag: '🇮🇪',
    dialCode: '+353',
    format: '## ### ####',
  },

  // North America
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    dialCode: '+1',
    format: '(###) ###-####',
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    dialCode: '+1',
    format: '(###) ###-####',
  },
  {
    code: 'MX',
    name: 'Mexico',
    flag: '🇲🇽',
    dialCode: '+52',
    format: '## #### ####',
  },

  // South America
  {
    code: 'BR',
    name: 'Brazil',
    flag: '🇧🇷',
    dialCode: '+55',
    format: '## #####-####',
  },
  {
    code: 'AR',
    name: 'Argentina',
    flag: '🇦🇷',
    dialCode: '+54',
    format: '## ####-####',
  },
  {
    code: 'CL',
    name: 'Chile',
    flag: '🇨🇱',
    dialCode: '+56',
    format: '# ####-####',
  },
  {
    code: 'CO',
    name: 'Colombia',
    flag: '🇨🇴',
    dialCode: '+57',
    format: '### ### ####',
  },
  {
    code: 'PE',
    name: 'Peru',
    flag: '🇵🇪',
    dialCode: '+51',
    format: '### ### ###',
  },

  // Asia
  {
    code: 'JP',
    name: 'Japan',
    flag: '🇯🇵',
    dialCode: '+81',
    format: '##-####-####',
  },
  {
    code: 'KR',
    name: 'South Korea',
    flag: '🇰🇷',
    dialCode: '+82',
    format: '##-####-####',
  },
  {
    code: 'CN',
    name: 'China',
    flag: '🇨🇳',
    dialCode: '+86',
    format: '### #### ####',
  },
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    dialCode: '+91',
    format: '##### #####',
  },
  {
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    dialCode: '+65',
    format: '#### ####',
  },
  {
    code: 'MY',
    name: 'Malaysia',
    flag: '🇲🇾',
    dialCode: '+60',
    format: '##-### ####',
  },
  {
    code: 'TH',
    name: 'Thailand',
    flag: '🇹🇭',
    dialCode: '+66',
    format: '##-###-####',
  },
  {
    code: 'PH',
    name: 'Philippines',
    flag: '🇵🇭',
    dialCode: '+63',
    format: '### ### ####',
  },
  {
    code: 'ID',
    name: 'Indonesia',
    flag: '🇮🇩',
    dialCode: '+62',
    format: '###-###-####',
  },
  {
    code: 'VN',
    name: 'Vietnam',
    flag: '🇻🇳',
    dialCode: '+84',
    format: '### ### ####',
  },

  // Oceania
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    dialCode: '+61',
    format: '#### ### ###',
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    flag: '🇳🇿',
    dialCode: '+64',
    format: '##-### ####',
  },

  // Africa
  {
    code: 'ZA',
    name: 'South Africa',
    flag: '🇿🇦',
    dialCode: '+27',
    format: '##-###-####',
  },
  {
    code: 'NG',
    name: 'Nigeria',
    flag: '🇳🇬',
    dialCode: '+234',
    format: '### ### ####',
  },
  {
    code: 'KE',
    name: 'Kenya',
    flag: '🇰🇪',
    dialCode: '+254',
    format: '### ######',
  },
  {
    code: 'EG',
    name: 'Egypt',
    flag: '🇪🇬',
    dialCode: '+20',
    format: '### ### ####',
  },
  {
    code: 'MA',
    name: 'Morocco',
    flag: '🇲🇦',
    dialCode: '+212',
    format: '###-######',
  },

  // Middle East
  {
    code: 'AE',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    dialCode: '+971',
    format: '## ### ####',
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    dialCode: '+966',
    format: '## ### ####',
  },
  {
    code: 'IL',
    name: 'Israel',
    flag: '🇮🇱',
    dialCode: '+972',
    format: '##-###-####',
  },
  {
    code: 'TR',
    name: 'Turkey',
    flag: '🇹🇷',
    dialCode: '+90',
    format: '### ### ## ##',
  },
];

// Helper function to get country by code
export const getCountryByCode = (code: string): Country | undefined => {
  return countries.find((country) => country.code === code);
};

// Helper function to get country by dial code
export const getCountryByDialCode = (dialCode: string): Country | undefined => {
  return countries.find((country) => country.dialCode === dialCode);
};

// Helper function to format phone number based on country format
export const formatPhoneNumber = (
  phoneNumber: string,
  format?: string
): string => {
  if (!format) return phoneNumber;

  // Remove all non-digit characters
  const digits = phoneNumber.replace(/\D/g, '');
  let formatted = format;

  // Replace # symbols with digits
  for (let i = 0; i < digits.length; i++) {
    formatted = formatted.replace('#', digits[i]);
  }

  // Remove remaining # symbols
  formatted = formatted.replace(/#/g, '');

  return formatted;
};

// Helper function to validate phone number length
export const validatePhoneNumber = (
  phoneNumber: string,
  country: Country
): boolean => {
  const digits = phoneNumber.replace(/\D/g, '');

  // Basic validation - most phone numbers are between 7-15 digits
  if (digits.length < 7 || digits.length > 15) return false;

  // Country-specific validation could be added here
  return true;
};
