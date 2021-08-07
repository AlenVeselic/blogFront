import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzlogoComponent } from './ozlogo.component';

describe('OzlogoComponent', () => {
  let component: OzlogoComponent;
  let fixture: ComponentFixture<OzlogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OzlogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OzlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
