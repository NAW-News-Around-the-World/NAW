// src/app/services/weather.service.ts
import { Injectable, signal, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  @Input() city: string = '';
  private apiKey = '7123295ea9b8f427251391d9be545c4b';

  weather = signal<any>(null);

  constructor(private http: HttpClient) {}

  // Obtener datos de clima
  getWeather(city: string): Observable<any> {
    return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    );
  }
}
