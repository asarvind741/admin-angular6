import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opened: Boolean = false;
  shouldRun = true;
  events = [];
  pages= [];
  cmsSubmenuOpened: Boolean = false;
  constructor( private router: Router) { }

  ngOnInit() {
    this.pages = ['First', 'Second', 'Third']
  }

  toggleCmsSubmenu(){
    this.cmsSubmenuOpened = !this.cmsSubmenuOpened;
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
