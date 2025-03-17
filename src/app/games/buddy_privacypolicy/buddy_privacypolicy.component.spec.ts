import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyPrivacyPolicyComponent } from './buddy_privacypolicy.component';

describe('BuddyPrivacyPolicyComponent', () => {
  let component: BuddyPrivacyPolicyComponent;
  let fixture: ComponentFixture<BuddyPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuddyPrivacyPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuddyPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
