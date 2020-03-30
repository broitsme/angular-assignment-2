import { Component, OnInit } from '@angular/core';
import { UserslistComponent } from 'src/app/shared/userslist/userslist.component';

@Component({
  selector: 'app-deleted-user-list',
  templateUrl: './deleted-user-list.component.html',
  styleUrls: ['./deleted-user-list.component.css']
})
export class DeletedUserListComponent extends UserslistComponent{
  putValuesInUserList(){
    for(let key of Object.keys(this.users)){
      if(this.users[key].isDeleted === true){
      this.userList.push(this.users[key]);
      }
    }
  }

}
