import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  static GetToken() {
    throw new Error('Method not implemented.');
  }
  constructor(private cookie: CookieService) { }
  SetToken(token) {
    this.cookie.set('myToken', token);
  }
  GetToken() {
    return this.cookie.get('myToken');
  }
  DeleteToken() {
    return this.cookie.delete('myToken');
  }

  GetPayLoad() {
    const token = this.GetToken();
    let payLoad;
    if (token) {
      payLoad = token.split('.')[1]; // cắt chuỗi băng . và lấy phần tử thứ 2\
      payLoad = JSON.parse(window.atob(payLoad));
    }
    return payLoad.data;
  }
}
