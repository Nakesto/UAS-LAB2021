import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitter';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authenticated = localStorage.getItem('user');
  constructor() { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: string) => {
        console.log(auth);
        if (localStorage.getItem('user')) {
          this.authenticated = localStorage.getItem('user');
        } else {
          this.authenticated = auth;
        }
      }
    );
  }



  logout() {
    localStorage.removeItem('role');
    this.authenticated = '';
  }
}
