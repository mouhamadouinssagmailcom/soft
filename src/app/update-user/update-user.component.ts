import { Component, OnInit } from '@angular/core';
import {Student} from "../student";
import {StudentServiceService} from "../student-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../user";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id!: number;
  user: User = new User();
  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.authService.getUserById(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.authService.updateUser(this.id, this.user).subscribe( data =>{
        this.goToUserList();
      }
      , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }
}


