import { SITE_TITLE, SITE_URL, CONTACT_EMAIL, SOCIAL_LINKS } from "../consts";
import { company } from "../data/company";

type WithContext<T> = T & { "@context": "https://schema.org" };

export function organizationSchema(): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_TITLE,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    description: company.tagline,
    sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.instagram].filter(
      (link) => link !== "#"
    ),
    logo: new URL("/favicon.svg", SITE_URL).toString(),
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      contactType: "sales",
    },
  };
}

export function websiteSchema(): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_TITLE,
    url: SITE_URL,
    inLanguage: "es",
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbListSchema(
  items: BreadcrumbItem[]
): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export function serviceSchema(service: {
  title: string;
  description: string;
  href: string;
}): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.description,
    url: new URL(service.href, SITE_URL).toString(),
    provider: {
      "@type": "Organization",
      name: SITE_TITLE,
      url: SITE_URL,
    },
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  href: string;
  pubDate: Date;
  category: string;
}): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: new URL(article.href, SITE_URL).toString(),
    datePublished: article.pubDate.toISOString(),
    inLanguage: "es",
    articleSection: article.category,
    author: {
      "@type": "Organization",
      name: SITE_TITLE,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_TITLE,
      url: SITE_URL,
    },
  };
}

export function faqPageSchema(
  questions: { question: string; answer: string }[]
): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
