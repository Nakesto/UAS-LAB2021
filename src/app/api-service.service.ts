import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBlog } from './blog';

@Injectable()
export class ApiServiceService {

    private _url: string = '/assets/data/blog.json';
    private _url2: string = '/assets/data/berita.json';
    constructor(private http: HttpClient) { }

    getNews(category: string) {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f097926ca952438aab7948e6f9a137c2`
        return this.http.get(url);
    }


    getBlog(): Observable<IBlog[]> {
        return this.http.get<IBlog[]>(this._url)
    }

}
