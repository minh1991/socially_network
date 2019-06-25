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
  userArr: []
  constructor(
    private userService: UsersService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.loggingUser = this.tokenService.GetPayLoad()
    this.GetAllUsers()
    this.GetUserById()
  }

  GetAllUsers() {
    this.userService.GetAllUsers().subscribe(data => {
      // console.log('Fr Item data--', data.allUsers);
      _.remove(data.allUsers, { username: this.loggingUser.username })
      this.users = data.allUsers;
      console.log('GetAllUsers--', this.users);
    });
  }

  GetUserById() {
    this.userService.GetUserById(this.loggingUser._id).subscribe(data => {
      this.userArr = data.user.following;
      console.log('GetUserById--', this.userArr);
    });
  }

  CheckUserArr(arr, id) {
    const result = _.find(arr, ['followed._id', id])
    if (result) {
      return true
    } else {
      return false
    }
  }
}
