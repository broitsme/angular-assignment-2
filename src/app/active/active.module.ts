import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUserListComponent } from './active-user-list/active-user-list.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const activeRoutes : Routes = [
  {path:'', component: ActiveUserListComponent},

]; 
@NgModule({
  declarations: [ActiveUserListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(activeRoutes)
  ],
})
export class ActiveModule{ 

}
