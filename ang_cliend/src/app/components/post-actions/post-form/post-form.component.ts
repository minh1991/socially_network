import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from './../../../services/post.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  formPost: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.formPost = this.formBuilder.group({
      post: ['', Validators.required]
    });
  }

  submitPost() {
    // console.log('formPost.value--', this.formPost.value);
    this.postService.addPost(this.formPost.value).subscribe(data => {
      console.log('data', data);
    });
  }
}
