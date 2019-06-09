import { Component, OnInit } from '@angular/core';
import { PostService } from './../../../services/post.service';
import * as moment from 'moment';
import io from 'socket.io-client';
import { Router } from '@angular/router';
import { TokenService } from './../../../services/token.service';
import * as _ from 'lodash';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  socket: any;
  allPosts = [];
  user: any;
  constructor(
    private postService: PostService,
    private router: Router,
    private tokenService: TokenService
  ) { this.socket = io('http://localhost:3000') }

  ngOnInit() {
    this.user = this.tokenService.GetPayLoad,
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

  likeClick(post) {
    // console.log(post);
    this.postService.addLike(post).subscribe(data => {
      // console.log(data); //msg:like thanh cong
      this.socket.emit('refresh', {})
    },
      err => console.log(err)
    )
  }

  checkLikeClick(arr, username) {
    return _.some(arr, { username: username })
  }

  commentBoxClick(post) {
    // console.log(post);
    this.router.navigate(['comments', post._id])
  }



}
