import { Component, Input } from '@angular/core';
import { DropdDownItemControl } from '../../../../models/dropdown.interface';

@Component({
  selector: 'app-dropdown-focus',
  templateUrl: './dropdown-focus.component.html',
  styleUrl: './dropdown-focus.component.scss'
})
export class DropdownFocusComponent {

  @Input({required : true}) dropdownText! : string

  @Input({required : true}) isButton : boolean = false

  @Input({required : true}) dropdDownItems : DropdDownItemControl[] = []

}
