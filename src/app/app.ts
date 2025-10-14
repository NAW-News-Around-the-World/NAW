import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import 'zone.js';
import { Footer } from './pages/footer/footer';
import { Menu } from './components/menu/menu';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Menu, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');

    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang') || 'en';
      this.translate.use(savedLang);
    } else {
      this.translate.use('en');
    }
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }
}
