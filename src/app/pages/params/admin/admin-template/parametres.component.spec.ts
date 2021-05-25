import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsAdminTemplateComponent } from './parametres.component';

describe('ParametresComponent', () => {
  let component: ParamsAdminTemplateComponent;
  let fixture: ComponentFixture<ParamsAdminTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParamsAdminTemplateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsAdminTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
