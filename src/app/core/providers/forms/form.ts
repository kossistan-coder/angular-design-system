import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";
import { FormControlValueInterface } from "../../../shared/interfaces/form";

export class FormValidators {

  static required(_control : AbstractControl) : ValidationErrors | null {
    const control = _control as FormControl<FormControlValueInterface>

    if (control.value.value && control.value.value.length === 0) {
      return {required : true}
    }

    return null
  }
}
