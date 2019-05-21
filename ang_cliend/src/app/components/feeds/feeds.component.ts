import { Component, OnInit } from '@angular/core';
import { TokenService } from './../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  token: any

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.token = this.tokenService.GetPayLoad();
    // console.log('token--', this.token);
  }

}
