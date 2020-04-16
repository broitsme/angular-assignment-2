import { Component } from '@angular/core';
import { UserslistComponent } from 'src/app/shared/userslist/userslist.component';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent extends UserslistComponent{
  constructor(private usersService:UsersService, private router:Router){
    super(usersService);
  }
  displayDetails(userId){
    this.router.navigate(['manage',userId]);
  }
}

