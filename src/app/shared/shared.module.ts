import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserslistComponent } from './userslist/userslist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [UserComponent, UserslistComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    UserComponent,
    UserdetailsComponent,
    UserslistComponent
  ]
})
export class SharedModule {}