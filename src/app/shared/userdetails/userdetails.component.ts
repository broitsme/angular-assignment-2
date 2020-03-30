import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userId:number;
  user;
  style = {
    'border-radius': '5px','position':'relative', 'border': '2px solid #D3D3D3', 'height':'180px', 'width':'90%','padding':'10px','margin':'8px'
  };
  deletedStyle = {'color':'red'};
  activeStyle = {'color':'green'};
  userStatus:string;
  constructor(private route:ActivatedRoute, private usersService:UsersService) { 
    route.params.subscribe((params)=>{
      this.userId = route.snapshot.params['userId'];
      this.user = this.getUser(usersService,this.userId);
      this.userStatus = this.user.isDeleted === true ? 'Deleted' : 'Active';
    });
    
  }
  private getUser(usersService, userId){
    for(let key of Object.keys(usersService)){
      if(usersService[key].id === userId){
        return usersService[key];
      }
    }
  }
  ngOnInit(): void {

  }

}
