import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonButtonComponent } from './salon-button.component';

describe('SalonButtonComponent', () => {
  let component: SalonButtonComponent;
  let fixture: ComponentFixture<SalonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
