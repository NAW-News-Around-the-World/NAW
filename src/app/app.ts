import { Component, signal, ViewEncapsulation } from '@angular/core';
import { Home } from './pages/home/home';
import { RouterOutlet } from '@angular/router';
import { Footer } from './pages/footer/footer';
import { Menu } from './components/menu/menu';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Menu],
  standalone: true,
  providers: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None

})

export class App {
  protected readonly title = signal('NAW');
}
