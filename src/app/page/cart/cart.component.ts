import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productsInCart: any;
  grandTotal!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // this.cartService.getProductsNumber().subscribe((res) => {
    //   this.productsInCart = res;
    //   this.getGrandTotal();
    // });
    this.getCartItem();
  }

  getGrandTotal() {
    // return (this.grandTotal = this.cartService.getTotalPrice());
  }

  removeItem(itemId: any) {
    this.cartService.deleteProductInCart(itemId);
  }

  inc(item: any) {
    if (item.quantity != 9) {
      item.quantity += 1;
      this.grandTotal += item.price;
      // this.totalPrice += item.price;
      this.getCartItem();
    }
  }

  dec(item: any) {
    if (item.quantity != 1) {
      item.quantity -= 1;
      this.grandTotal -= item.price;
      // this.totalPrice -= item.price;
      console.log(item.quantity);
    }
  }

  onSetCart(newCart: any) {
    // this.cartService.setCart(newCart).subscribe((response) => {
    //   newCart = response;
    // });
    // console.log(newCart);
  }

  getCartItem() {
    this.cartService.getProductInCarts().subscribe((res) => {
      this.productsInCart = res.cartItems;
      this.grandTotal = res.totalPrice;
      console.log(this.productsInCart);
    });
  }
}
