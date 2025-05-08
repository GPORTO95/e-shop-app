import { Component } from '@angular/core';
import { CartTotalSummaryComponent } from '../cart-total-summary/cart-total-summary.component';
import { CartListComponent } from '../cart-list/cart-list.component';

@Component({
  selector: 'app-cart',
  imports: [CartTotalSummaryComponent, CartListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
