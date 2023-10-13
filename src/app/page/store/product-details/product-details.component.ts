import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  productDetail: Product = new Product();
  tokens = localStorage.getItem('token');
  response: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.productId = param.get('id');
    });
    this.getProductById(this.productId);
    console.log(this.productId);
    console.log(this.tokens);
  }

  getProductById(id: any) {
    this.productService.getProductById(id).subscribe((response) => {
      this.productDetail = response;
    });
  }

  addProductToCart() {
    // this.cartService.addtoCart(item);
    // console.log(this.productId);
    if (this.tokens == undefined) {
      alert('Bạn Cần Đăng Nhập Trước');

      this.router.navigateByUrl('/login');
      return;
    }
    this.cartService.addProductToCart(this.productId).subscribe((res) => {
      this.response = res;
    });
    alert('Thêm Thành Công');
  }
}
