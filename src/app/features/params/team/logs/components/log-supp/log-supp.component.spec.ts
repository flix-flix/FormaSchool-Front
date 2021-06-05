import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSuppComponent } from './log-supp.component';

describe('LogSuppComponent', () => {
  let component: LogSuppComponent;
  let fixture: ComponentFixture<LogSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogSuppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
