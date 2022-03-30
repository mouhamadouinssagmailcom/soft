import { Component, OnInit } from '@angular/core';
import {Student} from "../student";
import {Router} from "@angular/router";
import {StudentServiceService} from "../student-service.service";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {


  student: Student = new Student();
  constructor(private studentServiceService: StudentServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveStudent(){
    this.studentServiceService.createStudent(this.student).subscribe( data =>{
        console.log(data);
        this.goToStudentList();
      },
      error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/user']);
  }

  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }
}

