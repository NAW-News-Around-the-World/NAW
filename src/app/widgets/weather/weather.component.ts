// src/app/pages/pages.ts
import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="weather-section" id="weather-section">
      <form>
        <input
          type="text"
          placeholder="Enter a city"
          [(ngModel)]="weatherService.city"
          name="city"
          class="form-control"
        />
        <button
          type="button"
          (click)="searchCity(weatherService.city)"
          class="btn btn-primary"
          id="btn-weather-search"
        >
          Search
        </button>
      </form>

      <div *ngIf="weatherService.weather()" class="weather-info" id="weather-info">
        <h2>Weather in {{ weatherService.weather().name }}</h2>
        <p>Temperature: {{ weatherService.weather().main.temp - 273.15 | number : '1.0-0' }} °C</p>
        <p>Condition: {{ weatherService.weather().weather[0].description }}</p>
        <p>Humidity: {{ weatherService.weather().main.humidity }}%</p>
        <p>Wind Speed: {{ weatherService.weather().wind.speed }} m/s</p>
      </div>
    </section>
  `,
  styleUrls: ['weather.scss'],
})
export class WeatherComponent {
  @Output() submit = new EventEmitter();
  weatherService = inject(WeatherService);

  mapUrl: string | null = null;

  searchCity(city: string) {
    if (!city || city.trim() === '') {
      console.warn('⚠️ Please enter a city name before searching');
      return;
    }

    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherService.weather.set(data);
        this.submit.emit(data);
        console.log('Ciudad buscada:', data);
      },
      error: (err) => console.error('API error:', err),
    });
  }
}
