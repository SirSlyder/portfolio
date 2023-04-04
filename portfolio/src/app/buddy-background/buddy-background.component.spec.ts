import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyBackgroundComponent } from './buddy-background.component';

describe('BuddyBackgroundComponent', () => {
  let component: BuddyBackgroundComponent;
  let fixture: ComponentFixture<BuddyBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuddyBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuddyBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
