import { NgModule } from "@angular/core";
import { InputComponent } from "./views/components/form-components/input/input.component";
import { InputHintComponent } from "./views/components/form-components/input-hint/input-hint.component";
import { InputLabelComponent } from "./views/components/form-components/input-label/input-label.component";
import { DropdownComponent } from "./views/components/dropdowns/dropdown/dropdown.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DropdownFocusComponent } from "./views/components/dropdowns/dropdown-focus/dropdown-focus.component";
import { PModalComponent } from "./views/components/modals/p-modal/p-modal.component";
import { UserDropdownComponent } from "./views/components/dropdowns/user-dropdown/user-dropdown.component";
import { InputWrapperComponent } from "./views/components/form-components/input-wrapper/input-wrapper.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DatePickerComponent } from "./views/components/date-picker/date-picker.component";
import { ComboboxComponent } from "./views/components/modals/combobox/combobox.component";

@NgModule({
  declarations : [

    InputComponent,
    InputHintComponent,
    InputLabelComponent,
    InputWrapperComponent,
    DropdownComponent,
    DropdownFocusComponent,
    PModalComponent,
    UserDropdownComponent,
    DatePickerComponent,
    ComboboxComponent,
  ],
    imports : [
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      CommonModule,
  ],
  exports : [
    InputComponent,
    InputHintComponent,
    InputLabelComponent,
    InputWrapperComponent,
    DropdownComponent,
    DropdownFocusComponent,
    PModalComponent,
    UserDropdownComponent,
    DatePickerComponent,
    ComboboxComponent,
  ]
})

export class SharedModule {

}
