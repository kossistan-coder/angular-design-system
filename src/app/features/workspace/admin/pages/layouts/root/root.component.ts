import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {
  isSidebarCollapsed = true;
  sidebarVisible: boolean = false;

  constructor(
    private router : Router
  ){

  }




}
