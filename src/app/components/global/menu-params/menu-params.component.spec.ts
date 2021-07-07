import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuParamsComponent } from './menu-params.component';

describe('MenuParamsComponent', () => {
  let component: MenuParamsComponent;
  let fixture: ComponentFixture<MenuParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
