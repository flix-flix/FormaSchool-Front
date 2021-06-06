import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogEmojiComponent } from './log-emoji.component';

describe('LogEmojiComponent', () => {
  let component: LogEmojiComponent;
  let fixture: ComponentFixture<LogEmojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogEmojiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
