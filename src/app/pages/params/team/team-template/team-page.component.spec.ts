import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsTeamTemplateComponent } from './team-page.component';

describe('TeamPageComponent', () => {
  let component: ParamsTeamTemplateComponent;
  let fixture: ComponentFixture<ParamsTeamTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParamsTeamTemplateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsTeamTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
