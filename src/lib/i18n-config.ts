export const defaultNS = 'common';
export const fallbackLng = 'en';
export const languages = ['en', 'zh'] as const;
export type Languages = (typeof languages)[number];

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  };
} 