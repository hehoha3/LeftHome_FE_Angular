import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { TokenService } from './token.service';

const baseURL = 'http://localhost:8080/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  signUp(user: any) {
    const response = this.http.post(`${baseURL}/signup`, user);
    console.log(response);

    return response;
  }

  signIn(user: any) {
    this.http.post(`${baseURL}/signin`, user).subscribe((res: any) => {
      const tokenParams = res.token;
      // console.log(tokenParams);
      this.tokenService.setToken(tokenParams);
    });
  }

  logOut() {
    this.tokenService.removeToken();
  }

  getAllUser(): Observable<any> {
    return this.http.get(baseURL);
  }
}
