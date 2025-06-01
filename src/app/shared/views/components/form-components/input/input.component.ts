import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms'
import { FormControlValueInterface, InputType } from '../../../../interfaces/form';

@Component({
  selector: 'app-input',
  providers : [
    {
      provide :  NG_VALUE_ACCESSOR,
      useExisting : forwardRef(() => InputComponent) ,
      multi : true ,
    }
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {

  @ViewChild('inputElement' , {static : true}) inputElement! : ElementRef<HTMLInputElement>
  @Input({required : true}) id! : string ;
  @Input({required : true}) name! : string ;
  @Input({required : true}) text! : string ;
  @Input({required : true}) inputType : InputType = 'text'
  @Input({required : true}) control! : FormControl<FormControlValueInterface>
  @Input({required : true}) classList! : string
  @Input() searchable : boolean = false


  @Input({required : false}) placeholder? : string ;

  ngOnInit(): void {

  }

}
