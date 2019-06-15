import { Component, OnInit } from '@angular/core';
import { PostService } from './../../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})
export class CurrentPostComponent implements OnInit {
  postId: any;
  currentPost = [];
  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.GetCurrentPost();
  }

  GetCurrentPost() {
    this.postService.GetPost(this.postId).subscribe(data => {
      // console.log('data curent--', data);
      this.currentPost = data.post.post;
      // console.log('current post--', this.currentPost);
    });
  }
}
