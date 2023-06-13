import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRoomComponent } from './security-room.component';

describe('SecurityRoomComponent', () => {
  let component: SecurityRoomComponent;
  let fixture: ComponentFixture<SecurityRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
