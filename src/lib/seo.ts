/**
 * Helpers para SEO e metadata
 */

import { Metadata } from 'next';
import { siteConfig } from './site';

interface MetadataParams {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function generateMetadata(params: MetadataParams): Metadata {
  const title = params.title
    ? `${params.title} | ${siteConfig.name}`
    : `${siteConfig.name} - Consultoria Jurídica Especializada`;
  
  const description = params.description || siteConfig.description;
  const image = params.image || `${siteConfig.url}/og-image.jpg`;
  const url = params.url || siteConfig.url;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Estrutura de dados para Schema.org
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zipCode,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Legal Services',
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
