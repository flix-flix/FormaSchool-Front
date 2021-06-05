import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCreateUserComponent } from './log-create-user.component';

describe('LogCreateUserComponent', () => {
  let component: LogCreateUserComponent;
  let fixture: ComponentFixture<LogCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogCreateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
