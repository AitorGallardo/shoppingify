import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAlertIconComponent } from './cart-alert-icon.component';

describe('CartAlertIconComponent', () => {
  let component: CartAlertIconComponent;
  let fixture: ComponentFixture<CartAlertIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartAlertIconComponent]
    });
    fixture = TestBed.createComponent(CartAlertIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
