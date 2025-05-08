import { Component, inject } from '@angular/core';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private cartService = inject(CartService);
  cartCount = this.cartService.cartCount;
}
