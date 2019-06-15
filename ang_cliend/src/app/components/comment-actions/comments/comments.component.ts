import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostService } from './../../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import io from 'socket.io-client';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, AfterViewInit {
  socket: any;
  navBarElm: any;
  postId: any;
  commentArr = [];

  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.socket = io('http://localhost:3000');
  }

  // xóa phần ảnh header
  // bắt đầu sẽ cho bắt class nav-content của phần nav-bar
  // sau đó sẽ chuyển phần style đó thành none để biến mất
  ngOnInit() {
    this.navBarElm = document.querySelector('.nav-content');
    this.postId = this.route.snapshot.paramMap.get('id');
    this.GetPost();
    this.socket.on('refreshPage', data => {
      this.GetPost();
    });
  }
  ngAfterViewInit(): void {
    this.navBarElm.style.display = 'none';
  }

  DateTimeCover(time) {
    return moment(time).fromNow();
  }

  GetPost() {
    // console.log(this.postId);
    this.postService.GetPost(this.postId).subscribe(data => {
      // console.log('data---', data);
      this.commentArr = data.post.comments.reverse();
      // console.log('commentArr--', this.commentArr);
    });
  }
}
