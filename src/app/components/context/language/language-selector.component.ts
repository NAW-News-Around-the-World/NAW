import { Component } from '@angular/core';
import { ChangeLangComponent } from './changeLang.component';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [ChangeLangComponent],
  template: `<app-change-lang (languageChange)="onLanguageChange($event)"></app-change-lang>`,
})
export class LanguageSelectorComponent {
  constructor(private languageService: LanguageService) {}

  onLanguageChange(lang: string): void {
    this.languageService.changeLanguage(lang as 'en' | 'es');
  }
}
