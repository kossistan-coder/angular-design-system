import { FormControl } from "@angular/forms";
import { FormControlValueInterface } from "../../../../shared/interfaces/form";

export interface RegisterForm {
  firstName : FormControl<FormControlValueInterface | null>
  lastName : FormControl<FormControlValueInterface | null>
  email : FormControl<FormControlValueInterface | null>
  password : FormControl<FormControlValueInterface | null>

}

export interface AuthForm {
  email : FormControl<FormControlValueInterface | null>
  password : FormControl<FormControlValueInterface | null>
}

export interface searchForm {
  text : FormControl<FormControlValueInterface | null>
}
