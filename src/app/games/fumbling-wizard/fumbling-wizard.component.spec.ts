import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumblingWizardComponent } from './fumbling-wizard.component';

describe('FumblingWizardComponent', () => {
  let component: FumblingWizardComponent;
  let fixture: ComponentFixture<FumblingWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FumblingWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FumblingWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
