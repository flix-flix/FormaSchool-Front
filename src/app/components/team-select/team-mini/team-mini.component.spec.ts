import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMiniComponent } from './team-mini.component';

describe('TeamMiniComponent', () => {
  let component: TeamMiniComponent;
  let fixture: ComponentFixture<TeamMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
