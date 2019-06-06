import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../../../services/post.service';



@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {
  postId: any;
  commentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    // console.log('this.postId', this.postId);
    this.init();
  }

  init() {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required]
    });
  }

  submitComment() {
    // console.log(this.commentForm.value);
    this.postService.addComment(this.postId, this.commentForm.value.comment).subscribe(data => {
      // console.log(data);
      this.commentForm.reset();
    });
  }

}
