import { Injectable, effect, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiKey = 'b5ce465852e843759fde9f1fdfa71e52';
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
