import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthForm } from '../../../core/models/form';
import { FormControlValueInterface } from '../../../../../shared/interfaces/form';
import { FormValidators } from '../../../../../core/services/providers/forms/form';

@Component({
  selector: 'app-event-edition',
  templateUrl: './event-edition.component.html',
  styleUrl: './event-edition.component.scss'
})
export class EventEditionComponent {

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

   getControl(name : string){
      return this.formGroup.get(name) as FormControl<FormControlValueInterface>;
    }


}
