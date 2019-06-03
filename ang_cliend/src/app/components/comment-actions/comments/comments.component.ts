import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, AfterViewInit {

  navBarElm: any

  constructor() { }

  // xóa phần ảnh
  // bắt đầu sẽ cho bắt class nav-content của phần nav-bar
  // sau đó sẽ chuyển phần style đó thành none để biến mất
  ngOnInit() {
    this.navBarElm = document.querySelector('.nav-content')
  }
  ngAfterViewInit(): void {
    this.navBarElm.style.display = 'none'
  }


}
