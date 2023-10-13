import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: String;
  numberCart: number = 0;
  allOrder: any;
  productsInCart: any[] = [];
  tokens = localStorage.getItem('token');
  isLoggedIn: boolean = false;

  constructor(common: CommonService, private cartService: CartService) {
    this.title = common.title;
  }

  ngOnInit(): void {
    // this.cartService.getProductsNumber().subscribe((res) => {
    //   this.numberCart = res.length;
    // });
    this.allOrder = this.cartService.getProductInCarts();
    console.log(this.allOrder);
    this.getCartItem();
    this.isUserLoggedIn();
    console.log(this.isLoggedIn);
  }

  getCartItem() {
    this.cartService.getProductInCarts().subscribe((res) => {
      this.productsInCart = res.cartItems;
      this.numberCart += this.productsInCart.length;
    });
  }

  isUserLoggedIn() {
    if (this.tokens != null) {
      return (this.isLoggedIn = true);
    } else {
      return (this.isLoggedIn = false);
    }
  }
}
