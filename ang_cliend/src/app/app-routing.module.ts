import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { CheckBoxConfirmComponent } from './components/check-box-confirm/check-box-confirm.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'feed', component: FeedsComponent },
  { path: 'checkbox-confirm', component: CheckBoxConfirmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
