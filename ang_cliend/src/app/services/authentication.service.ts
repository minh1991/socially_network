import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const BASEURL = 'http://localhost:3000/api/socially';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}
  signUpUser(data): Observable<any> {
    return this.http.post(`${BASEURL}/signup`, data);
  }

  loginUser(data): Observable<any> {
    return this.http.post(`${BASEURL}/login`, data);
  }

}
