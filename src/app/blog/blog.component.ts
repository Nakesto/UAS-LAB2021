import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blog: any[] | undefined;
  constructor(private _apiservice: ApiServiceService) { }

  ngOnInit() {
    this._apiservice.getBlog().subscribe((data) => (this.blog = data))
  }

}
