import { Component, OnInit } from '@angular/core';
import {Student} from "../student";
import {ActivatedRoute} from "@angular/router";
import {StudentServiceService} from "../student-service.service";

@Component({
  selector: 'app-details-students',
  templateUrl: './details-students.component.html',
  styleUrls: ['./details-students.component.css']
})
export class DetailsStudentsComponent implements OnInit {



  id!: number
  student!: Student
  constructor(private route: ActivatedRoute, private studentServiceService: StudentServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.student = new Student();
    this.studentServiceService.getStudenttById(this.id).subscribe( data => {
      this.student = data;
    });
  }

}

