import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FeedsComponent } from './components/feeds/feeds.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'feed', component: FeedsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
