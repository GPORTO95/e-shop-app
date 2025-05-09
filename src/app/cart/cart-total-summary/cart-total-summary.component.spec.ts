import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTotalSummaryComponent } from './cart-total-summary.component';

describe('CartTotalSummaryComponent', () => {
  let component: CartTotalSummaryComponent;
  let fixture: ComponentFixture<CartTotalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartTotalSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartTotalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
