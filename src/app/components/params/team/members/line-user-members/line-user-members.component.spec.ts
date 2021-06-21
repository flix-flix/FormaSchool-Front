import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineUserMembersComponent } from './line-user-members.component';

describe('LineUserMembersComponent', () => {
  let component: LineUserMembersComponent;
  let fixture: ComponentFixture<LineUserMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineUserMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineUserMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
