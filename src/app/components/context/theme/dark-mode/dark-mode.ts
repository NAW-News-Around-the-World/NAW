import { Component, OnInit, Renderer2, inject, effect, signal, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * @Component DarkMode
 * @description
 * A standalone UI component that provides a button to toggle
 * between light and dark mode across the entire application.
 * It persists the user's preference in `localStorage` and also respects
 * the operating system's configuration (`prefers-color-scheme`).
 */
@Component({
  selector: 'app-dark-mode',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  template: `
    <button mat-icon-button (click)="toggleDarkMode()" matTooltip="Change theme">
      @if (mode() === 'dark') {
        <mat-icon class="theme-icon">☀️</mat-icon>
      } @else {
        <mat-icon class="theme-icon">🌙</mat-icon>
      }
    </button>
  `,
  styles: [
    `
      .theme-icon {
        font-size: 18px;
      }
    `,
  ],
})
export class DarkMode implements OnInit, OnDestroy {
  /**
   * @property mode
   * @description
   * An Angular signal that stores the current theme state.
   * Can be either 'light' or 'dark'.
   */
  mode = signal<'light' | 'dark'>('light');

  /**
   * @property storageKey
   * @description
   * Static key used to store and retrieve the theme preference
   * from `localStorage`.
   * @static
   */
  static storageKey = 'darkMode';

  /**
   * @private
   * @property renderer
   * @description
   * Instance of `Renderer2` used to safely manipulate the DOM,
   * specifically to add or remove the 'dark-mode' class from the body.
   */
  private renderer = inject(Renderer2);

  /**
   * @private
   * @property document
   * @description
   * Injection token that provides secure access to the DOM `document`
   * object across platforms.
   */
  private document = inject(DOCUMENT);

  /**
   * @constructor
   * @description
   * Initializes the component and sets up an `effect` that reacts
   * to changes in the `mode` signal.
   * This effect applies the corresponding CSS class to the `body` and
   * persists the user's choice in `localStorage`.
   */
  constructor() {
    effect(() => {
      if (this.mode() === 'dark') {
        this.renderer.addClass(this.document.body, 'dark-mode');
        localStorage.setItem(DarkMode.storageKey, 'dark');
      } else {
        this.renderer.removeClass(this.document.body, 'dark-mode');
        localStorage.setItem(DarkMode.storageKey, 'light');
      }
    });
  }

  /**
   * @method toggleDarkMode
   * @description
   * Toggles the value of the `mode` signal between 'light' and 'dark'.
   * This method is triggered by the button's (click) event in the template.
   * @returns {void}
   */
  toggleDarkMode(): void {
    this.mode.set(this.mode() === 'dark' ? 'light' : 'dark');
  }

  /**
   * @method ngOnInit
   * @description
   * Angular lifecycle hook. Executed when the component is initialized.
   * Sets the initial theme based on the following priority order:
   * 1. The value stored in `localStorage`.
   * 2. The user's operating system preference (`prefers-color-scheme`).
   * 3. The default value 'light'.
   * @returns {void}
   */
  ngOnInit(): void {
    const savedMode =
      this.getStoredThemeName() ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    this.mode.set(savedMode as 'light' | 'dark');
  }

  /**
   * @method ngOnDestroy
   * @description
   * Angular lifecycle hook. Executed right before the component is destroyed.
   * Performs cleanup by removing the `dark-mode` class from the `body`
   * to prevent side effects if the component is removed from the DOM.
   * @returns {void}
   */
  ngOnDestroy(): void {
    // Optional: you may want to keep the class even if the component is destroyed.
    // If that's the case, you can remove this method.
    this.renderer.removeClass(this.document.body, 'dark-mode');
  }

  /**
   * @private
   * @method getStoredThemeName
   * @description
   * Helper method to safely retrieve the stored theme from `localStorage`.
   * Uses a try-catch block to prevent errors in environments where `localStorage`
   * is unavailable or disabled (e.g., private browsing in some browsers).
   * @returns {string | null} The stored theme ('light' or 'dark'), or null if not found.
   */
  private getStoredThemeName(): string | null {
    try {
      return localStorage.getItem(DarkMode.storageKey);
    } catch {
      return null;
    }
  }
}
