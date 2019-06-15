import { Component, OnInit } from '@angular/core';
import { TokenService } from './../../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: any;

  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit() {
    this.user = this.tokenService.GetPayLoad();
    // console.log('user--', this.user);
  }

  logOut() {
    this.tokenService.DeleteToken();
    this.router.navigate(['']);
  }

  BackHome() {
    this.router.navigate(['feed']);
  }
}
