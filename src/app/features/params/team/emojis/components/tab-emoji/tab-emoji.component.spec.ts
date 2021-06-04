import { ComponentFixture, TestBed } from '@angular/core/testing';

import TabEmojiComponent from './tab-emoji.component';

describe('TabEmojiComponent', () => {
  let component: TabEmojiComponent;
  let fixture: ComponentFixture<TabEmojiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabEmojiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
