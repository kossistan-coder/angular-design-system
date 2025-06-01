import { FormControl, FormGroup } from '@angular/forms';
import { DropdDownItemControl } from '../../../../../shared/models/dropdown.interface';
import { Component, OnInit } from '@angular/core';
import { searchForm } from '../../../core/models/form';
import { FormValidators } from '../../../../../core/providers/forms/form';
import { FormControlValueInterface } from '../../../../../shared/interfaces/form';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  isOpen : boolean =  false
  openCombo : boolean = false
  formGroup! : FormGroup<searchForm>

  constructor(){
        this.formGroup = new FormGroup<searchForm>({
          text : new FormControl<FormControlValueInterface>(
            {value : undefined},
            [FormValidators.required]
          ),

        })
  }

  ngOnInit(): void {

  }

    items : DropdDownItemControl[] = [
      {
        label : "connexion",
        url : "#"
      },
      {
        label : "inscription",
        url : "#"
      },
  ]

  openModal(){
    this.isOpen = true
  }

  closModal(){
    this.isOpen = false
  }

  valid(){

  }

  onDateSelected(date: Date): void {
    console.log('Selected date:', date);
  }

  onCancelled(): void {
    console.log('Cancelled');
  }

  openCombobox(){
    this.openCombo = true
  }

  getControl(name : string){
    return this.formGroup.get(name) as FormControl<FormControlValueInterface>;
  }


}
