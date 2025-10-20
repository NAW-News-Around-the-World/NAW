import { Component, OnInit, signal, computed, effect, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NgForOf, NgIf, DatePipe } from '@angular/common';
import { UserService } from '../../services/new.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf, DatePipe, NgIf, TranslateModule],
  templateUrl: './home.html',
  styleUrls: ['./btn-loadMore.scss', '../../app.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Home implements OnInit {
  allNews: any[] = [];
  pageSize = signal(13);
  news = signal<any[]>([]);

  featured = computed(() => this.news().slice(0, 4));
  general = computed(() => this.news().slice(4));

  private langSub: Subscription;

  constructor(private userService: UserService, private translate: TranslateService, private cd: ChangeDetectorRef) {
    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.cd.markForCheck();
    });
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
  }

  ngOnDestroy(): void {
      if (this.langSub) this.langSub.unsubscribe();
    }
}
