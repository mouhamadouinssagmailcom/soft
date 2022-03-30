import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
import {Router} from "@angular/router";
import {StudentServiceService} from "../student-service.service";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students!: Student[];


  constructor(private studentServiceService: StudentServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents() {
    this.studentServiceService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }

  studentDetails(id: number) {
    this.router.navigate(['students-details', id]);
  }

  updatestudent(id: number) {
    this.router.navigate(['update-student', id]);
  }

  deleteStudent(id: number) {
    this.studentServiceService.deleteStudent(id).subscribe(data => {
      console.log(data);
      this.getStudents();
    })
  }


}

