import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onProductCreate(newProduct: {
    id: number;
    name: String;
    thumbnail: String;
    description: string;
    material: string;
    price: number;
    quantity: number;
    sizes: string;
    id_type: number;
  }) {
    this.productService.addProduct(newProduct).subscribe((response) => {
      response = newProduct;
      alert('Add New Product Successfully !!!');
    });
  }
}
