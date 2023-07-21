import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaughterLandsComponent } from './slaughter-lands.component';

describe('SlaughterLandsComponent', () => {
  let component: SlaughterLandsComponent;
  let fixture: ComponentFixture<SlaughterLandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlaughterLandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlaughterLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
