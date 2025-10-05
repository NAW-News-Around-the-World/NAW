// src/app/components/menu/menu
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DarkMode } from '../context/theme/dark-mode/dark-mode';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  standalone: true,
  providers: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
