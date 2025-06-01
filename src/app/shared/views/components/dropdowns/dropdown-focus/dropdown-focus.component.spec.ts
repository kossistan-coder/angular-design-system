import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFocusComponent } from './dropdown-focus.component';

describe('DropdownFocusComponent', () => {
  let component: DropdownFocusComponent;
  let fixture: ComponentFixture<DropdownFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownFocusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
