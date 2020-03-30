import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveUserListComponent } from './active/active-user-list/active-user-list.component';
import { DeletedUserListComponent } from './deleted/deleted-user-list/deleted-user-list.component';
import { ManageUsersComponent } from './manage/manage-users/manage-users.component';
import { HomeComponent } from './home/home.component';
import { UserdetailsComponent } from './shared/userdetails/userdetails.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'deleted',
  loadChildren: ()=> import('./deleted/deleted.module').then((file)=> file.DeletedModule)
  },
  {path:'active',
  loadChildren: ()=> import('./active/active.module').then((file)=> file.ActiveModule)
  },
  {path:'manage',
  loadChildren: ()=> import('./manage/manage.module').then((file)=> file.ManageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
