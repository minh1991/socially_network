import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication.module';
import { FeedsModule } from './modules/feeds.module';
import { CookieService } from 'ngx-cookie-service';






@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthenticationModule, FeedsModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
