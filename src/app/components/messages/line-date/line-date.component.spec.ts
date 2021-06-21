import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDateComponent } from './line-date.component';

describe('LineDateComponent', () => {
  let component: LineDateComponent;
  let fixture: ComponentFixture<LineDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
