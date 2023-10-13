import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  setToken(token: string): void {
    // gửi token lên cho server (gửi qua query param)
    localStorage.setItem('token', token);
  }

  // getToken(): string {
  //   const userToken = localStorage.getItem('token')
  //   return userToken;
  // }

  removeToken(): void {
    localStorage.removeItem('token');
  }
}
