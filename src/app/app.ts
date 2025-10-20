import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import 'zone.js';
import { Footer } from './components/layout/footer/footer';
import { Menu } from './components/layout/menu/menu';

import { RouterOutlet } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [Menu, Footer, RouterOutlet, TranslateModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
