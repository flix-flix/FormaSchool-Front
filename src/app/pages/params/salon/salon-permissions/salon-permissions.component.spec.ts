import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonPermissionsComponent } from './salon-permissions.component';

describe('SalonPermissionsComponent', () => {
  let component: SalonPermissionsComponent;
  let fixture: ComponentFixture<SalonPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonPermissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
