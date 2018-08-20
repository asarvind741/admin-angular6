import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opened: boolean;
  shouldRun = true;
  events = [];

  constructor() { }

  ngOnInit() {
  }

  

  openSideBar(){
    this.opened = !this.opened;
  }

}
