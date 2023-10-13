import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  products: any;
  response: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getListProduct();
  }

  getListProduct() {
    return this.productService.getListProduct().subscribe((response) => {
      this.products = response;
    });
  }

  deleteProduct(productId: number) {
    return this.productService.deleteProduct(productId);
  }
}
