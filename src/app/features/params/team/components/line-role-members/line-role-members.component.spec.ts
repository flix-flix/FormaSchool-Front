import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineRoleMembersComponent } from './line-role-members.component';

describe('LineRoleMembersComponent', () => {
  let component: LineRoleMembersComponent;
  let fixture: ComponentFixture<LineRoleMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineRoleMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineRoleMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
