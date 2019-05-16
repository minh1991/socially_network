import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [FeedsComponent, NavBarComponent, MenuLeftComponent, PostFormComponent, PostsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],




  exports: [FeedsComponent, NavBarComponent, MenuLeftComponent, PostFormComponent, PostsComponent],
  providers: [TokenService, PostService]
})
export class FeedsModule { }
