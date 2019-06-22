import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:3000/api/socially/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  GetAllUsers(): Observable<any> {
    return this.http.get(`${BASEURL}/all-users`);
  }
}
