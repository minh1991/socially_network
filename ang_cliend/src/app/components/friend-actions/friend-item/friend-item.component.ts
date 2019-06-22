import { Component, OnInit } from '@angular/core';
// import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css']
})
export class FriendItemComponent implements OnInit {
  // users: [];
  constructor() // private userService: UsersService
  {}

  ngOnInit() {
    // this.userService.GetAllUsers().subscribe(data => {
    //   console.log('Fr Item data--', data);
    // });
  }
}
