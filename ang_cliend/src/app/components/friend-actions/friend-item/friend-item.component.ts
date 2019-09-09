import { UsersService } from './../../../services/users.service';
import { Component, OnInit, Input } from '@angular/core';
import { FriendService } from './../../../services/friend.service';
UsersService;

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css']
})
export class FriendItemComponent implements OnInit {
  @Input() dataUsers: any;

  constructor(private friendService: FriendService, private userService: UsersService) {}

  ngOnInit() {}

  clickFollower(user) {
    // console.log(user);
    this.friendService.PostFollowerUsers(user._id).subscribe(data => {
      console.log('data--', data);
    });
  }
}
