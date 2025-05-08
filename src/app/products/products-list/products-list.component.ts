import { Component, inject } from '@angular/core';
import { ProductService } from '../products.service';
import { AsyncPipe } from '@angular/common';
import { CartService } from '../../cart/cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  imports: [AsyncPipe],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  
  private service = inject(ProductService);
  private cartService = inject(CartService);
  products$ = this.service.load();

  addProductToCart(product: Product): void {
    this.cartService.addProduct(product);
  }
}
