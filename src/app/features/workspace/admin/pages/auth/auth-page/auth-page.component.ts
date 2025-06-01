import { Component, OnInit } from '@angular/core';
import { InputWrapperComponent } from "../../../../../../shared/views/components/form-components/input-wrapper/input-wrapper.component";
import { FormControl, FormGroup } from '@angular/forms';
import { AuthForm } from '../../../../core/models/form';
import { FormControlValueInterface } from '../../../../../../shared/interfaces/form';
import { FormValidators } from '../../../../../../core/services/providers/forms/form';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent implements OnInit {

  formGroup! : FormGroup<AuthForm>
  standalone = true;
  disabled = false;

  constructor(){
    this.formGroup = new FormGroup<AuthForm>({
      email : new FormControl<FormControlValueInterface>(
        {value : undefined},
        [FormValidators.required]
      ),
      password : new FormControl<FormControlValueInterface>(
        {value : undefined},
        [FormValidators.required]
      ),
    })
  }

  ngOnInit(): void {

  }


  getControl(name : string){
    return this.formGroup.get(name) as FormControl<FormControlValueInterface>;
  }

  submit(){

  }

}
