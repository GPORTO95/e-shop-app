import { Component, inject } from '@angular/core';
import { ProductService } from '../products.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [AsyncPipe],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  
  private service = inject(ProductService);
  products$ = this.service.load();
}
