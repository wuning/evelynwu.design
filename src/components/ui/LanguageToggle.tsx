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
    if (newLang === lang) {
      setIsOpen(false);
      return;
    }

    const segments = pathname.split('/');
    segments[1] = newLang;
    const newPathname = segments.join('/');
    
    router.push(newPathname);
    router.refresh();
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative language-toggle">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        aria-label={isLoaded ? t('language.switchLanguage') : 'Switch Language'}
      >
        <GlobeAltIcon className="w-4 h-4 mr-1" />
        <span className="uppercase">{lang}</span>
        <ChevronDownIcon className={`w-4 h-4 ml-1 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden z-50">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => handleLanguageChange(language)}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                language === lang ? 'bg-gray-50 dark:bg-gray-800' : ''
              }`}
            >
              <span className="uppercase font-medium">{language}</span>
              {isLoaded && (
                <span className="ml-2 text-gray-500 dark:text-gray-400">
                  {t(`language.${language}`)}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 