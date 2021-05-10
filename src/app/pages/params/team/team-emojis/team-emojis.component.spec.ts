import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamEmojisComponent } from './team-emojis.component';

describe('TeamEmojisComponent', () => {
  let component: TeamEmojisComponent;
  let fixture: ComponentFixture<TeamEmojisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamEmojisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
