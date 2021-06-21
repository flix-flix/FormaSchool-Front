import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogPinComponent } from './log-pin.component';

describe('LogPinComponent', () => {
  let component: LogPinComponent;
  let fixture: ComponentFixture<LogPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
