import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgWriterComponent } from './msg-writer.component';

describe('MsgWriterComponent', () => {
  let component: MsgWriterComponent;
  let fixture: ComponentFixture<MsgWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgWriterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
