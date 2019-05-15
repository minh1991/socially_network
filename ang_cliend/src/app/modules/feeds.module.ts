import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedsComponent } from './../components/feeds/feeds.component';
import { TokenService } from './../services/token.service';

//checkBox
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FeedsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],

  exports: [FeedsComponent],
  providers: [TokenService]
})
export class FeedsModule { }
