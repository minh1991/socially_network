import { Component, OnInit } from '@angular/core';
import { TokenService } from './../../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.tokenService.DeleteToken();
    this.router.navigate(['']);
  }

}
