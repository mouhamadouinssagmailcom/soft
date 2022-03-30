import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {BoardAdminComponent} from "./board-admin/board-admin.component";
import {BoardUserComponent} from "./board-user/board-user.component";
import {ProfileComponent} from "./profile/profile.component";
import {BoardModeratorComponent} from "./board-moderator/board-moderator.component";
import {UpddateStuentComponent} from "./upddate-stuent/upddate-stuent.component";
import {ListStudentComponent} from "./list-student/list-student.component";
import {CreateStudentComponent} from "./create-student/create-student.component";
import {DetailsStudentsComponent} from "./details-students/details-students.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import { RegisterComponent } from './register/register.component';
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import {DetailsUserComponent} from "./details-user/details-user.component";
import {ListUserComponent} from "./list-user/list-user.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    DetailsUserComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    UpddateStuentComponent,
    ListStudentComponent ,
    CreateStudentComponent,
    DetailsStudentsComponent,
    UpdateUserComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],

  bootstrap: [AppComponent]
})
export class AppModule { }
