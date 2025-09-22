import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  private key = 'b5ce465852e843759fde9f1fdfa71e52';
  private apiUrl = 'https://newsapi.org/v2/everything?q=world&sortBy=publishedAt&language=en';
  private apiUrlEs = 'https://newsapi.org/v2/everything?q=españa&sortBy=publishedAt';

  news = signal<any[]>([]);
  newsEs = signal<any[]>([]);


  constructor(private http: HttpClient) {}

  getNews(): void {
    this.http.get<any>(`${this.apiUrl}&apiKey=${this.key}`).subscribe({
      next: (data) => this.news.set(data.articles),
      error: (err) => console.error('Error cargando noticias:', err),
    });
  }

  getNewsEs(): void {
    this.http.get<any>(`${this.apiUrlEs}&apiKey=${this.key}`).subscribe({
      next: (data) => this.newsEs.set(data.articles),
      error: (err) => console.error('Error cargando noticias (ES):', err),
    });
  }
}
