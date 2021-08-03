import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccessLoginTextComponent } from './register-success-login-text.component';

describe('RegisterSuccessLoginTextComponent', () => {
  let component: RegisterSuccessLoginTextComponent;
  let fixture: ComponentFixture<RegisterSuccessLoginTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSuccessLoginTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSuccessLoginTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
