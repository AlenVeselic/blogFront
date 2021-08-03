import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameEmailExistsRegPopupComponent } from './username-email-exists-reg-popup.component';

describe('UsernameEmailExistsRegPopupComponent', () => {
  let component: UsernameEmailExistsRegPopupComponent;
  let fixture: ComponentFixture<UsernameEmailExistsRegPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameEmailExistsRegPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameEmailExistsRegPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
