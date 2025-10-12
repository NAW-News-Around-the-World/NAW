// src/app/components/menu/menu
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DarkMode } from '../context/theme/dark-mode/dark-mode';
import { ChangeLangComponent } from '../context/language/changeLang.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, DarkMode, ChangeLangComponent],
  standalone: true,
  providers: [],
  templateUrl: './menu.html',
  styleUrl: '../../app.scss',
})
export class Menu {
  isMenuOpen = false;

  constructor(private languageService: LanguageService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLanguageChange(lang: string): void {
    this.languageService.changeLanguage(lang as 'en' | 'es');
  }
}
