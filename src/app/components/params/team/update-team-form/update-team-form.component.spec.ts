import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeamFormComponent } from './update-team-form.component';

describe('UpdateTeamFormComponent', () => {
  let component: UpdateTeamFormComponent;
  let fixture: ComponentFixture<UpdateTeamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTeamFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
