import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<'en' | 'es'>('en');
  private isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const savedLang = localStorage.getItem('language') as 'en' | 'es';
      if (savedLang) {
        this.lang.set(savedLang);
        this.translate.use(savedLang); 
      }
    }
  }

  changeLanguage(lang: 'en' | 'es') {
    this.lang.set(lang);
    this.translate.use(lang);

    if (this.isBrowser) {
      localStorage.setItem('language', lang);
    }
  }
}
