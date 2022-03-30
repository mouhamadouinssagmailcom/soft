import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
import {ActivatedRoute} from "@angular/router";
import {StudentServiceService} from "../student-service.service";
import {User} from "../user";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {


  id!: number
  user!: User

  constructor(private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.user = new User();
    this.authService.getUserById(this.id).subscribe(data => {
      this.user = data;
    });
  }




}
