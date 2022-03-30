import { Component, OnInit } from '@angular/core';
import {StudentServiceService} from "../student-service.service";
import {Router} from "@angular/router";
import {AuthService} from "../_services/auth.service";
import {Student} from "../student";
import {User} from "../user";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users!: User[];



  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.authService.getUserList().subscribe(data => {
      this.users = data;
    });
  }

  userDetails(id: number) {
    this.router.navigate(['user-details', id]);
  }

  updateuser(id: number) {
    this.router.navigate(['update-user', id]);
  }

  deleteuser(id: number) {
    this.authService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    })
  }






}
