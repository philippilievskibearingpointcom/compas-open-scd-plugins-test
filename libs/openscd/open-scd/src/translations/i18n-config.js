import { registerTranslateConfig, use } from 'lit-translate';
import { loader } from './loader.js';

registerTranslateConfig({ loader, empty: key => key });

const language = localStorage.getItem('language') || 'en';
use(language);

export function setLanguage(lang) {
    use(lang);
    localStorage.setItem('language', lang);
}
