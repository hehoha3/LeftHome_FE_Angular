import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { __param } from 'tslib';

const baseURL = 'http://localhost:8080/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  // public productList = new BehaviorSubject<any>([]);
  public allOrder: any;
  public totalQuantity: number = 0;
  private tokens = localStorage.getItem('token');
  // private tokens = localStorage.getItem('token');

  constructor(private http: HttpClient) {}

  // getProductsNumber() {
  //   console.log(this.productList.asObservable());
  //   return this.productList.asObservable();
  // }

  // setProduct(product: any) {
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }
  // addtoCart(product: any) {
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //   this.getTotalPrice();
  // }

  // getTotalPrice(): number {
  //   let grandTotal = 0;
  //   this.cartItemList.map((a: any) => {
  //     grandTotal += a.price;
  //   });
  //   return grandTotal;
  // }
  // removeCartItem(product: any) {
  //   this.cartItemList.map((a: any, index: any) => {
  //     if (product.id === a.id) {
  //       this.cartItemList.splice(index, 1);
  //     }
  //   });
  //   this.productList.next(this.cartItemList);
  // }

  // removeAllCart() {
  //   this.cartItemList = [];
  //   this.productList.next(this.cartItemList);
  // }

  // getProductInCart() {
  //   const param = new HttpParams().set('token', this.tokens || '');
  //   // params?: HttpParams | { ...; }
  //   return this.http.get(baseURL).subscribe;
  // }

  // setCart(newCart: any) {
  //   return this.http.post(baseURL, newCart);
  // }

  //  ----------------------------------------------------------------------------------------------------

  getProductInCarts(): Observable<any> {
    return this.http.get(`${baseURL}/${this.tokens}`);
  }

  addProductToCart(product_id: number): Observable<any> {
    console.log(this.tokens, product_id);
    return this.http.post(`${baseURL}/add/${this.tokens}`, {
      product_id: product_id,
    });
  }

  deleteProductInCart(product_id: number) {
    return this.http
      .delete(`${baseURL}/delete/${product_id}`)
      .subscribe((res) => {
        alert(res);
      });
  }
}
