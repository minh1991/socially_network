import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedsComponent } from './../components/feeds/feeds.component';
import { TokenService } from './../services/token.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './../components/layout/nav-bar/nav-bar.component';
import { MenuLeftComponent } from './../components/layout/menu-left/menu-left.component';
import { PostFormComponent } from './../components/layout/post-form/post-form.component';

@NgModule({
  declarations: [FeedsComponent, NavBarComponent, MenuLeftComponent, PostFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],

  exports: [FeedsComponent, NavBarComponent, MenuLeftComponent, PostFormComponent],
  providers: [TokenService]
})
export class FeedsModule { }
