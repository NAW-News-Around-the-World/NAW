// src/app/services/weather.service.ts
import { Injectable, signal, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  @Input() city: string = '';
  private apiKey = 'YOUR_API_KEY';

  weather = signal<any>(null);

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    );
  }
}
