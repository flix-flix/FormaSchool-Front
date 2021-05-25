import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonSidebarComponent } from './salon-sidebar.component';

describe('SalonSidebarComponent', () => {
  let component: SalonSidebarComponent;
  let fixture: ComponentFixture<SalonSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
