import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEditionComponent } from './event-edition.component';

describe('EventEditionComponent', () => {
  let component: EventEditionComponent;
  let fixture: ComponentFixture<EventEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventEditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
