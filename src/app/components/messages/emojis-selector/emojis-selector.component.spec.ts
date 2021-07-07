import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojisSelectorComponent } from './emojis-selector.component';

describe('EmojisSelectorComponent', () => {
  let component: EmojisSelectorComponent;
  let fixture: ComponentFixture<EmojisSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojisSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojisSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
