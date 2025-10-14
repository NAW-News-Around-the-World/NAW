// src/app/components/menu/menu
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DarkMode } from '../context/theme/dark-mode/dark-mode';
import { ChangeLangComponent } from '../context/language/changeLang.component';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, DarkMode, ChangeLangComponent, TranslateModule],
  standalone: true,
  providers: [],
  templateUrl: './menu.html',
  styleUrl: '../../app.scss',
})
export class Menu {
  isMenuOpen = false;
  langService = inject(LanguageService);

  constructor(private languageService: LanguageService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLanguageChange(lang: string): void {
    this.languageService.changeLanguage(lang as 'en' | 'es');
  }

  get currentLang(): string {
    return this.langService.lang();
  }
}
