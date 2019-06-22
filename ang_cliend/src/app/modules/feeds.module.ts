import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FeedsComponent } from './../components/feeds/feeds.component';
import { TokenService } from './../services/token.service';
import { PostService } from './../services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './../components/layout/nav-bar/nav-bar.component';
import { MenuLeftComponent } from './../components/layout/menu-left/menu-left.component';
import { PostFormComponent } from '../components/post-actions/post-form/post-form.component';
import { PostsComponent } from '../components/post-actions/posts/posts.component';
import { CommentsFormComponent } from '../components/comment-actions/comments-form/comments-form.component';
import { CommentsComponent } from './../components/comment-actions/comments/comments.component';
import { CurrentPostComponent } from './../components/comment-actions/current-post/current-post.component';
import { FriendComponent } from '../components/friend-actions/friend/friend.component';
import { FriendItemComponent } from '../components/friend-actions/friend-item/friend-item.component';
import { UsersService } from './../services/users.service';

@NgModule({
  declarations: [
    FeedsComponent,
    NavBarComponent,
    MenuLeftComponent,
    PostFormComponent,
    PostsComponent,
    CommentsComponent,
    CommentsFormComponent,
    CurrentPostComponent,
    FriendComponent,
    FriendItemComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],

  exports: [
    FeedsComponent,
    NavBarComponent,
    MenuLeftComponent,
    PostFormComponent,
    PostsComponent,
    CommentsComponent,
    CommentsFormComponent,
    CurrentPostComponent
  ],
  providers: [TokenService, PostService, UsersService]
})
export class FeedsModule {}
