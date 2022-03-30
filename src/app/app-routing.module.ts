import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailsStudentsComponent} from "./details-students/details-students.component";
import {CreateStudentComponent} from "./create-student/create-student.component";
import {UpddateStuentComponent} from "./upddate-stuent/upddate-stuent.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {BoardUserComponent} from "./board-user/board-user.component";
import {BoardModeratorComponent} from "./board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import {HomeComponent} from "./home/home.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {DetailsUserComponent} from "./details-user/details-user.component";
import {ListStudentComponent} from "./list-student/list-student.component";
import {ListUserComponent} from "./list-user/list-user.component";

const routes: Routes = [
  {path: 'students', component: ListStudentComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: 'users', component: ListUserComponent},
  {path: '', component: HomeComponent},

  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'update-student/:id', component: UpddateStuentComponent},
  {path: 'students-details/:id',component:DetailsStudentsComponent},
  {path: 'update-user/:id', component: UpdateUserComponent},
  {path: 'user-details/:id', component: DetailsUserComponent},
  {path: 'user-details', component: DetailsUserComponent},

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
