import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { WeatherComponent } from './widgets/weather/weather.component';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'weather', component: WeatherComponent },
];
export const appRoutingProviders = [provideRouter(routes)];
