import { Component, OnInit } from '@angular/core';
import { PostService } from './../../../services/post.service';
import * as moment from 'moment';
import io from 'socket.io-client';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  socket: any;
  allPosts = [];
  constructor(
    private postService: PostService
  ) { this.socket = io('http://localhost:3000') }

  ngOnInit() {
    this.AllPostShow()
    this.socket.on('refreshPage', (data) => {
      this.AllPostShow()
    })
  }

  AllPostShow() {
    this.postService.GetAllPosts().subscribe(data => {
      // console.log('all posts data--', data);
      this.allPosts = data.posts;
      // console.log(this.allPosts);
    })
  }

  DateTimeCover(time) {
    return moment(time).fromNow();
  }

  likeClick(like) {
    console.log(like);
  }



}
