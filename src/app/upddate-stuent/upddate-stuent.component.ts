import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from "../student";
import {StudentServiceService} from "../student-service.service";

@Component({
  selector: 'app-upddate-stuent',
  templateUrl: './upddate-stuent.component.html',
  styleUrls: ['./upddate-stuent.component.css']
})
export class UpddateStuentComponent implements OnInit {


  id!: number;
  student: Student = new Student();
  constructor(private studentServiceService: StudentServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.studentServiceService.getStudenttById(this.id).subscribe(data => {
      this.student = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.studentServiceService.updateStudent(this.id, this.student).subscribe( data =>{
        this.goToEmployeeList();
      }
      , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/students']);
  }
}

