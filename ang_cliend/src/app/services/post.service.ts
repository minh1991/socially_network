import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:3000/api/socially';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }
  addPost(data): Observable<any> {
    return this.http.post(`${BASEURL}/post/add-post`, data);
  }
  GetAllPosts(): Observable<any> {
    return this.http.get(`${BASEURL}/post/all-posts`);
  }

  addLike(data): Observable<any> {
    return this.http.post(`${BASEURL}/post/add-like`, data);
  }

  addComment(postId, comment): Observable<any> {
    return this.http.post(`${BASEURL}/post/add-comment`, { postId, comment });
  }

}
