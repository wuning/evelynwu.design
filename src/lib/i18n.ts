'use client';

import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './i18n-config';
import { useEffect, useState } from 'react';

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => 
      import(`../locales/${language}/${namespace}.json`)))
    .init({
      ...getOptions(lng, ns),
      returnObjects: true
    });
  return i18nInstance;
};

export function useTranslation(lng: string, ns: string, options: { keyPrefix?: string } = {}) {
  const [t, setT] = useState<(key: string, options?: { returnObjects?: boolean }) => any>((key: string) => key);
  
  useEffect(() => {
    initI18next(lng, ns).then((i18nextInstance) => {
      setT(() => i18nextInstance.getFixedT(lng, ns, options.keyPrefix));
    });
  }, [lng, ns, options.keyPrefix]);

  return { t };
} 