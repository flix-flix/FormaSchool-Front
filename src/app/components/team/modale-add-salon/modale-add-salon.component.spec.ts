import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleAddSalonComponent } from './modale-add-salon.component';

describe('ModaleAddSalonComponent', () => {
  let component: ModaleAddSalonComponent;
  let fixture: ComponentFixture<ModaleAddSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaleAddSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleAddSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
