import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderProfileComponent } from './sender-profile.component';

describe('SenderProfileComponent', () => {
  let component: SenderProfileComponent;
  let fixture: ComponentFixture<SenderProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
