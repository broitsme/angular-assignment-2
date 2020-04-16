import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedUserListComponent } from './deleted-user-list/deleted-user-list.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
const deletedRoutes : Routes =[
  {path:'', component:DeletedUserListComponent}
];
@NgModule({
  declarations: [DeletedUserListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(deletedRoutes)
  ]
})
export class DeletedModule { }
