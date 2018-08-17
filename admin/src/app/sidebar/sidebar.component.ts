import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  shouldRun = true;

  constructor() { }

  ngOnInit() {
  }

  

  openSideBar(){
    this.opened = !this.opened;
  }

}
