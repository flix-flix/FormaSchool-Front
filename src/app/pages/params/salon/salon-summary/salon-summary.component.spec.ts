import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonSummaryComponent } from './salon-summary.component';

describe('SalonSummaryComponent', () => {
  let component: SalonSummaryComponent;
  let fixture: ComponentFixture<SalonSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
