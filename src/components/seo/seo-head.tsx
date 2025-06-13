import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import { StructuredData } from './structured-data';

interface SEOHeadProps extends NextSeoProps {
  structuredData?: Record<string, any>[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  structuredData,
  ...seoProps
}) => (
  <>
    <NextSeo {...seoProps} />
    {structuredData?.map((data, index) => (
      <StructuredData key={index} data={data} />
    ))}
  </>
);
