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

  quantityOptions = [1, 2, 3, 4, 5];

  cartItems = this.cartService.cartItems;

  onRemove(cartItem: CartItem): void {
    this.cartService.removeProduct(cartItem.product);
  }

  onQuantityChange(event: any, cartItem: CartItem): void {
    cartItem.quantity = +event.target.value;
    this.cartService.updateCartQuantity(cartItem);
  }
}
