import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from "../../../../shared.module";
import { FormControl, FormGroup } from '@angular/forms';
import { FormControlValueInterface } from '../../../../interfaces/form';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrl: './combobox.component.scss'
})
export class ComboboxComponent implements OnInit {

  @Input({required : true}) formGroup! : FormGroup
  @Input({required : true}) control! : FormControl<FormControlValueInterface>
  @Input({required : true}) isOpen! : boolean
  @Input({required : true}) title! : string
  @Input() subTitle? : string | null
  @Input({required : false}) actionOnOutsideClick = false

  ngOnInit(): void {

  }

  close(){
    
  }



}
