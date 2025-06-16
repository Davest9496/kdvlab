// Create this as a temporary test component
// Add it to your page to test font loading

'use client';

import { useEffect, useState } from 'react';

export function FontTest() {
  const [fontStatus, setFontStatus] = useState<string>('Testing...');

  useEffect(() => {
    // Test if fonts are accessible via HTTP
    const testFontAccess = async () => {
      const fontUrls = [
        '/fonts/Gilroy-Light.otf',
        '/fonts/Gilroy-ExtraBold.otf',
        '/fonts/Rubik-Variable.ttf',
        '/fonts/Rubik-Full-Version/Desktop Fonts/Rubik/Rubik-VariableFont_wght.ttf',
      ];

      const results = await Promise.all(
        fontUrls.map(async (url) => {
          try {
            const response = await fetch(url, { method: 'HEAD' });
            return { url, status: response.status, accessible: response.ok };
          } catch (error) {
            return { url, status: 'error', accessible: false };
          }
        })
      );

      setFontStatus(JSON.stringify(results, null, 2));
    };

    testFontAccess();

    // Test if fonts are loaded by the browser
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        console.log('Document fonts ready');
        console.log(
          'Available fonts:',
          Array.from(document.fonts).map((f) => f.family)
        );
      });
    }
  }, []);

  return (
    <div className="p-8 space-y-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold">Font Loading Test</h2>

      {/* Test Gilroy */}
      <div className="space-y-2">
        <h3 className="font-heading font-light text-xl">
          Gilroy Light Test (should be light)
        </h3>
        <h3 className="font-heading font-extrabold text-xl">
          Gilroy ExtraBold Test (should be very bold)
        </h3>
      </div>

      {/* Test Rubik */}
      <div className="space-y-2">
        <p className="font-body font-normal text-lg">Rubik Normal Test</p>
        <p className="font-body font-medium text-lg">Rubik Medium Test</p>
        <p className="font-body font-semibold text-lg">Rubik SemiBold Test</p>
        <p className="font-body font-bold text-lg">Rubik Bold Test</p>
      </div>

      {/* Font accessibility test results */}
      <details className="space-y-2">
        <summary className="cursor-pointer font-semibold">
          Font Accessibility Test Results
        </summary>
        <pre className="text-xs bg-black text-green-400 p-4 rounded overflow-auto">
          {fontStatus}
        </pre>
      </details>

      {/* CSS Variables Test */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>CSS Variables:</p>
        <p>
          --font-gilroy:{' '}
          {getComputedStyle(document.documentElement).getPropertyValue(
            '--font-gilroy'
          ) || 'Not set'}
        </p>
        <p>
          --font-rubik:{' '}
          {getComputedStyle(document.documentElement).getPropertyValue(
            '--font-rubik'
          ) || 'Not set'}
        </p>
      </div>
    </div>
  );
}
