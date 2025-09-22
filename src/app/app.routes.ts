import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Es } from './pages/home/es/es';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'home/es', component: Es },
];
