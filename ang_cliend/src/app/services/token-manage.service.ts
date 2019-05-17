import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class TokenManageService implements HttpInterceptor {
  constructor(private tokenService: TokenService) { }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(req);
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    const token = this.tokenService.GetToken();
    if (token) {
      // tslint:disable-next-line:no-string-literal
      headersConfig['Authorization'] = `beader ${token}`;
    }
    // tslint:disable-next-line:variable-name
    const _req = req.clone({ setHeaders: headersConfig });
    return next.handle(_req);
  }

}
