import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEmailPopupComponent } from './no-email-popup.component';

describe('NoEmailPopupComponent', () => {
  let component: NoEmailPopupComponent;
  let fixture: ComponentFixture<NoEmailPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEmailPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoEmailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
