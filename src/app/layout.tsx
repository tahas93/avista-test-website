import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/index.css';

import Header from '@/components/Header';
import TopSticky from '@/components/TopSticky';

import { siteConfig } from '@/constant/config';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {},
  twitter: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <TopSticky />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
