import { Component, OnInit } from '@angular/core';
import { PostService } from './../../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.GetAllPosts().subscribe(data => {
      console.log('all posts data--', data);
    })
  }

}
