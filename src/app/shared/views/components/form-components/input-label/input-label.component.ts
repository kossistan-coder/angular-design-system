import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-label',
  templateUrl: './input-label.component.html',
  styleUrl: './input-label.component.scss'
})
export class InputLabelComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) id!: string;
  @Input() required = true;
}
