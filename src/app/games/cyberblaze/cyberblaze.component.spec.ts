import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberblazeComponent } from './cyberblaze.component';

describe('CyberblazeComponent', () => {
  let component: CyberblazeComponent;
  let fixture: ComponentFixture<CyberblazeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberblazeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberblazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
