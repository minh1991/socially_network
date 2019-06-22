import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  users: [];
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.GetAllUsers();
  }

  GetAllUsers() {
    this.userService.GetAllUsers().subscribe(data => {
      // console.log('Fr Item data--', data.allUsers);
      this.users = data.allUsers;
      console.log('users--', this.users);
    });
  }
}
