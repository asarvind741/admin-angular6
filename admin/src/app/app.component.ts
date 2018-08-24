import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: Boolean;
  opened: Boolean;

  constructor(private router: Router) { 
    this.router.events.forEach(event => {
      if(event instanceof NavigationStart ){
        if(localStorage.getItem('token'))
        this.isLoggedIn = true;
        else
        this.isLoggedIn = false;
      }
    })
  }


  ngOnInit() {
    }

}
