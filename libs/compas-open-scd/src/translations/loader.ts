import { Strings } from 'lit-translate';
import { de as compasDe } from './de.js';
import { en as compasEn } from './en.js';
import { de as oscdDe } from '@openscd/open-scd/src/translations/de.js';
import { en as oscdEn } from '@openscd/open-scd/src/translations/en.js';

export type Language = 'en' | 'de';
const rawLanguages: Record<Language, Record<string, any>> = {
  en: { ...oscdEn, ...compasEn },
  de: { ...oscdDe, ...compasDe },
};

function flatten(
  obj: Record<string, any>,
  prefix = '',
  out: Record<string, string> = {}
): Record<string, string> {
  for (const [key, val] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof val === 'string') {
      out[path] = val;
    } else if (typeof val === 'object' && val !== null) {
      flatten(val as Record<string, any>, path, out);
    }
  }
  return out;
}

export async function loader(lang: string): Promise<Strings> {
  const primary = (lang.split('-')[0] as Language) || 'en';
  const raw = rawLanguages[primary] ?? rawLanguages.en;

  console.log(`[i18n] loader called with lang="${lang}" → using "${primary}" keys:`, Object.keys(raw));

  const flat = flatten(raw);

  console.log('[i18n] loader returning flattened translations:', flat);

  return flat;
}
