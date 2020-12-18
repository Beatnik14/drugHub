import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFieldComponent } from './medical-field.component';

describe('MedicalFieldComponent', () => {
  let component: MedicalFieldComponent;
  let fixture: ComponentFixture<MedicalFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
