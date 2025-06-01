import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';


@Component({
  selector: 'app-p-modal',
  templateUrl: './p-modal.component.html',
  styleUrl: './p-modal.component.scss'
})
export class PModalComponent {
  @Input({required : true}) isOpen = false;
  @Input({required : false}) actionOnOutsideClick = false

  @Output() closeEmiter = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  close(): void {
    this.isOpen = false;
    this.closeEmiter.emit(false)
  }

  open(): void {
    this.isOpen = true;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent): void {
    if (this.isOpen) this.close();
  }

  closeOnOutsideClick(){
    if (this.actionOnOutsideClick) {
      this.close()
    }
  }

  // @HostListener('document:click' , ['$event'])
  // onClick(event : MouseEvent) : void {
  //   console.log("click outside");

  //   if (this.isOpen) {

  //   }
  // }
}
