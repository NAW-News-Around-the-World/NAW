import { Component, OnInit, signal, computed, effect } from '@angular/core';
import { NgForOf, NgIf, DatePipe } from '@angular/common';
import { UserService } from '../../services/new.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf, DatePipe, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  allNews: any[] = [];
  pageSize = signal(13);
  news = signal<any[]>([]);

  featured = computed(() => this.news().slice(0, 4));
  general = computed(() => this.news().slice(4));

  constructor(private userService: UserService) {
    effect(() => {
      const articles = this.userService.news();
      this.allNews = articles;
      this.news.set(this.allNews.slice(0, this.pageSize()));
    });
  }

  ngOnInit() {
    this.userService.getNews();
  }

  loadMore() {
    this.pageSize.update((size) => size + 12);
    this.news.set(this.allNews.slice(0, this.pageSize()));
    console.log('Noticias cargadas:', this.pageSize());
  }
}
