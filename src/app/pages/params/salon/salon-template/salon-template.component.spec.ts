import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsSalonTemplateComponent } from './salon-template.component';

describe('SalonTemplateComponent', () => {
  let component: ParamsSalonTemplateComponent;
  let fixture: ComponentFixture<ParamsSalonTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParamsSalonTemplateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsSalonTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
