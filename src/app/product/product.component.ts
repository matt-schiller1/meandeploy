import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private httpService: HttpService, private router: Router) {

  }

  ngOnInit() {
    this.getProductsFromService();
  }

  getProductsFromService() {
    this.httpService.getProducts().subscribe(products => {
      console.log('list of products!', products);
      this.products = products;
    })
  }

  onEdit(productId) {
    this.router.navigateByUrl('/products/edit/' + productId);
  }

  onDelete(product: Product) {
    this.httpService.deleteProduct(product._id).subscribe(data => {
      this.products = this.products.filter(currentProduct => currentProduct._id !== data._id);
    });
  }

  invoked(event) {
    console.log('invoked', event);
    this.products = this.products.map(currentProduct => currentProduct._id === event._id ? event : currentProduct);
  }
}
