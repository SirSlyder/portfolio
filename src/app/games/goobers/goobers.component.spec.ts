import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoobersComponent } from './goobers.component';

describe('GoobersComponent', () => {
  let component: GoobersComponent;
  let fixture: ComponentFixture<GoobersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoobersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoobersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
