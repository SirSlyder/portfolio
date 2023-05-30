import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenFavoursComponent } from './seven-favours.component';

describe('SevenFavoursComponent', () => {
  let component: SevenFavoursComponent;
  let fixture: ComponentFixture<SevenFavoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenFavoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenFavoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
