import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from '../shared/userdetails/userdetails.component';

const manageRoutes : Routes =   [
  {path:'', component:ManageUsersComponent,
  children:[
    {path:':userId', component:UserdetailsComponent}
  ]
  }
];

@NgModule({
  declarations: [ManageUsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(manageRoutes)
  ]
})
export class ManageModule { }
