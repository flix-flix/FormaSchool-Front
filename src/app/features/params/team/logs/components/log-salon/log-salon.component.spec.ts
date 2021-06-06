import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSalonComponent } from './log-salon.component';

describe('LogSalonComponent', () => {
  let component: LogSalonComponent;
  let fixture: ComponentFixture<LogSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
