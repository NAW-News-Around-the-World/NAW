import { Component, OnInit, signal, computed, effect } from '@angular/core';
import { NgForOf, NgIf, DatePipe } from '@angular/common';
import { UserService } from '../../../services/new.service';

@Component({
  selector: 'app-es',
  standalone: true,
  imports: [NgForOf, NgIf, DatePipe],
  templateUrl: './es.html',
  styleUrl: './es.scss',
})
export class Es implements OnInit {
  allNews: any[] = [];
  newsEs = signal<any[]>([]);
  pageSize = signal(12);

  featuredEs = computed(() => this.newsEs().slice(0, 4));
  generalEs = computed(() => this.newsEs().slice(4, this.pageSize()));

  constructor(private userService: UserService) {
    effect(() => {
      this.newsEs.set(this.userService.newsEs());
    });
  }

  ngOnInit(): void {
    this.userService.getNewsEs();
  }

  loadMore() {
    this.pageSize.update((size) => size + 12);
    console.log('Noticias ES cargadas:', this.pageSize());
  }
}
