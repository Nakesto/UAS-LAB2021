import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  category: string = 'sport'
  category2 = 'business'
  category3 = 'entertainment'
  category4 = 'health'
  category5 = 'technology'
  category6 = 'general'
  link = 'https://static.independent.co.uk/2021/05/03/14/newFile-2.jpg?width=1200&auto=webp&quality=75'
  news: any[] = [];
  public covid: any[] | undefined;
  news2: any[] = [];
  news3: any[] = [];
  news4: any[] = [];
  news5: any[] = [];
  news6: any[] = [[], [], []];
  news7: any[] = [];
  headline: any[] = [];
  headline2: any[] = [];
  headline3: any[] = [];
  headline4: any[] = [];
  constructor(private apiservice: ApiServiceService) {
  }

  ngOnInit(): void {
    this.apiservice.getNews(this.category).subscribe(data => {
      const news = data['articles'];
      this.headline = news.splice(0, 12);
      this.headline.length = 1;
      news.length = 3;
      this.news = news;
    })

    this.apiservice.getNews(this.category2).subscribe(data => {
      this.news2 = data['articles'];
      this.news2.length = 3;
    })

    this.apiservice.getNews(this.category3).subscribe(data => {
      this.news3 = data['articles'];
      this.headline2 = this.news3.slice(3, 10);
      this.headline2.length = 1;
      this.news3.length = 3;
    })

    this.apiservice.getNews(this.category4).subscribe(data => {
      this.news4 = data['articles'];
      this.headline3 = this.news4.slice(3, 10);
      this.headline3.length = 1;
      this.news4.length = 2;
    })

    this.apiservice.getNews(this.category5).subscribe(data => {
      this.news5 = data['articles'];
      this.headline4 = this.news5.slice(3, 10);
      this.headline4.length = 1;
      this.news5.length = 2;
    })
    this.apiservice.getNews(this.category6).subscribe(data => {
      this.news6 = data['articles'];
      this.news7 = this.news6.slice(5, 9);
      this.news7.length = 4;
      this.news6.length = 4;
    })
  }
}
