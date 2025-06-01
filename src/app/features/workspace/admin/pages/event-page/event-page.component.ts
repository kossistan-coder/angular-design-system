import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.scss'
})
export class EventPageComponent implements OnInit {
  isOpen : boolean = false


  ngOnInit(): void {

  }

  openModal(){
    this.isOpen = true
  }

  close(){
    this.isOpen = false
  }
}
