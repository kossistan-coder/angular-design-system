import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FormControlValueInterface } from '../../../../interfaces/form';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrl: './input-wrapper.component.scss'
})
export class InputWrapperComponent implements OnInit , AfterViewInit , OnDestroy {

  @Input() isVisible = true
  @ViewChild('div') div! : ElementRef

  @Input({required : true }) control! : FormControl<FormControlValueInterface | null>
  @Input() label: string | null = null;

  private unsubs$ = new Subject<void>()

  ngOnInit(): void {

  }


  ngAfterViewInit(): void {
      this.control.parent?.statusChanges.pipe(takeUntil(this.unsubs$)).subscribe(
        (value) =>{
          if (value === "INVALID" ) {

          }
        }
      )
  }


  handleInvalidStatus(){
    this.div.nativeElement.focus()
  }


  ngOnDestroy(): void {
      this.unsubs$.next()
      this.unsubs$.complete()
  }


}
