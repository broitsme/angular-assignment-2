import { Component, OnInit } from '@angular/core';
import { UserslistComponent } from 'src/app/shared/userslist/userslist.component';

@Component({
  selector: 'app-active-user-list',
  templateUrl: './active-user-list.component.html',
  styleUrls: ['./active-user-list.component.css']
})
export class ActiveUserListComponent extends UserslistComponent {
    putValuesInUserList(){
    for(let key of Object.keys(this.users)){
      if(!this.users[key].isDeleted){
      this.userList.push(this.users[key]);
      }
    }
  }

}
