import { TokenService } from './../../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  users: [];
  loggingUser: any
  constructor(
    private userService: UsersService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.loggingUser = this.tokenService.GetPayLoad()
    this.GetAllUsers();
  }

  GetAllUsers() {
    this.userService.GetAllUsers().subscribe(data => {
      // console.log('Fr Item data--', data.allUsers);
      _.remove(data.allUsers, { username: this.loggingUser.username })
      this.users = data.allUsers;
      console.log('users--', this.users);
    });
  }
}
