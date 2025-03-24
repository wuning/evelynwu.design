'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n';
import { Languages, languages } from '@/lib/i18n-config';
import { usePathname, useRouter } from 'next/navigation';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface LanguageToggleProps {
  lang: Languages;
}

export default function LanguageToggle({ lang }: LanguageToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation(lang, 'common');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof t === 'function') {
      setIsLoaded(true);
    }
  }, [t]);

  const handleLanguageChange = (newLang: Languages) => {
    if (typeof window !== 'undefined') {
      const currentPathname = pathname;
      const newPathname = currentPathname.replace(`/${lang}`, `/${newLang}`);
      router.push(newPathname);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <GlobeAltIcon className="w-4 h-4 mr-1" />
        <span className="uppercase">{lang}</span>
        <ChevronDownIcon className="w-4 h-4 ml-1" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => handleLanguageChange(language)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                language === lang ? 'bg-gray-50 dark:bg-gray-800' : ''
              }`}
            >
              <span className="uppercase">{language}</span>
              {isLoaded ? ` - ${t(`language.${language}`)}` : ''}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 