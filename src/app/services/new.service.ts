import { Injectable, effect, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiKey = 'YOUR_API_KEY';
  private apiUrl = 'https://newsapi.org/v2/everything?q=world&sortBy=publishedAt';

  news = signal<any[]>([]);
  isLoading = signal(false);
  error = signal<string | null>(null);

  private http = inject(HttpClient);
  langService = inject(LanguageService);

  constructor() {
    effect(() => {
      const lang = this.langService.lang();
      this.getNews(lang);
    });
  }

  getNews(language: string = 'en'): void {
    this.isLoading.set(true);
    this.error.set(null);

    const url = `${this.apiUrl}&language=${language}&apiKey=${this.apiKey}`;

    this.http.get<any>(url).subscribe({
      next: (data) => this.news.set(data.articles),
      error: (err) => {
        console.error('Error loading news:', err);
        this.error.set('Failed to load news.');
      },
      complete: () => {
        this.isLoading.set(false);
      },
    });
  }
}
