import React from 'react';
import { Languages } from '@/lib/i18n-config';
import Navigation from '@/components/layout/Navigation';

interface LayoutProps {
  children: React.ReactNode;
  params: {
    lang: Languages;
  };
}

export default function Layout({ children, params: { lang } }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation lang={lang} />
      {children}
      <footer className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Evelyn Wu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 