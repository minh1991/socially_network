import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { CommentsComponent } from './components/comment-actions/comments/comments.component';
import { AuthenticationGuard } from './services/authentication.guard';
import { FriendComponent } from './components/friend-actions/friend/friend.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'feed', component: FeedsComponent, canActivate: [AuthenticationGuard] },
  { path: 'comments/:id', component: CommentsComponent, canActivate: [AuthenticationGuard] },
  { path: 'friend', component: FriendComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
