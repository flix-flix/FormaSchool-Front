import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmojisComponent } from './admin-emojis.component';

describe('AdminEmojisComponent', () => {
  let component: AdminEmojisComponent;
  let fixture: ComponentFixture<AdminEmojisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEmojisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
