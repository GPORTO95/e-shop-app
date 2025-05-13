import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart-list',
  imports: [],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {
  private cartService = inject(CartService);

  cartItems = this.cartService.cartItems;

  onRemove(cartItem: CartItem): void {
    this.cartService.removeProduct(cartItem.product);

  }
}
