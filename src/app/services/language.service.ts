import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<'en' | 'es'>('en');
  private isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const savedLang = localStorage.getItem('language') as 'en' | 'es';
      if (savedLang) {
        this.lang.set(savedLang);
      }
    }
  }

  changeLanguage(lang: 'en' | 'es') {
    this.lang.set(lang);

    if (this.isBrowser) {
      localStorage.setItem('language', lang);
    }
  }
}
