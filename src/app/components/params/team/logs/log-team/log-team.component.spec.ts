import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTeamComponent } from './log-team.component';

describe('LogTeamComponent', () => {
  let component: LogTeamComponent;
  let fixture: ComponentFixture<LogTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
