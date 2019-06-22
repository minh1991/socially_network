import { Component, OnInit, Input } from '@angular/core';
// import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css']
})
export class FriendItemComponent implements OnInit {
  @Input() dataUsers: any;

  constructor() {}

  ngOnInit() {}
}
