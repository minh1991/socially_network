import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostService } from './../../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, AfterViewInit {

  navBarElm: any;
  postId: any;
  commentArr = [];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  // xóa phần ảnh header
  // bắt đầu sẽ cho bắt class nav-content của phần nav-bar
  // sau đó sẽ chuyển phần style đó thành none để biến mất
  ngOnInit() {
    this.navBarElm = document.querySelector('.nav-content');
    this.postId = this.route.snapshot.paramMap.get('id');
    this.GetPost();
  }
  ngAfterViewInit(): void {
    this.navBarElm.style.display = 'none';
  }

  GetPost() {
    // console.log(this.postId);
    this.postService.GetPost(this.postId).subscribe(data => {
      // console.log(data);
      this.commentArr = data.post;
      console.log('commentArr--', this.commentArr);
    });
  }

}
