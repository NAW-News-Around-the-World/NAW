import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-lang',
  standalone: true,
  template: `
    <select (click)="changeLanguage($event)">
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  `,
})
export class ChangeLangComponent {
  @Output() languageChange = new EventEmitter<string>();

  changeLanguage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.languageChange.emit(lang);
  }
}
