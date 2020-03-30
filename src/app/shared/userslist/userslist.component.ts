import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent extends UserComponent{
  userList = [];
  users;
  constructor(users:UsersService) {
    super();
    this.users = users;
    this.putValuesInUserList();
  }
  putValuesInUserList(){
    for(let key of Object.keys(this.users)){
      console.log(this.users[key].firstName);
      this.userList.push(this.users[key]);
    }
  }
}
