import React from 'react';

type CalendlyPopupProps = {
  url: string;
  children: React.ReactNode;
};

export const CalendlyPopup: React.FC<CalendlyPopupProps> = ({
  url,
  children,
}) => {
  const openCalendly = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <span onClick={openCalendly} style={{ cursor: 'pointer' }}>
      {children}
    </span>
  );
};
