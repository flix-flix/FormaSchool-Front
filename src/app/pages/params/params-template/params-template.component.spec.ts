import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsTemplateComponent } from './params-template.component';

describe('ParamsTemplateComponent', () => {
  let component: ParamsTemplateComponent;
  let fixture: ComponentFixture<ParamsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamsTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
