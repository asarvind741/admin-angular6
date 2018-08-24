import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opened: boolean = false;
  shouldRun = true;
  events = [];
  constructor( private router: Router) { }

  ngOnInit() {
  }

  openSideBar(){
    this.opened = !this.opened;
  }

  logoutAdmin(){
    console.log("logout")
    localStorage.clear();
    this.router.navigate(['/']);

  }

}
