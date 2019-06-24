import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:3000/api/socially/friends';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  constructor(private http: HttpClient) { }

  PostFollowerUsers(followed): Observable<any> {
    return this.http.post(`${BASEURL}/follower`, {
      followed
    });
  }
}