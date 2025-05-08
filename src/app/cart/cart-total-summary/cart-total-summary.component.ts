import { Component, inject } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-total-summary',
  imports: [],
  templateUrl: './cart-total-summary.component.html',
  styleUrl: './cart-total-summary.component.scss'
})
export class CartTotalSummaryComponent {
  cartService = inject(CartService);
}
