import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu-sub-course',
  templateUrl: './menu-sub-course.component.html',
  styleUrls: ['./menu-sub-course.component.css']
})
export class MenuSubCourseComponent implements OnInit {
  editSubCourseTypeForm:FormGroup;
  submitted = false;

  scmname;
  constructor() { }

  ngOnInit() {
  }

}
