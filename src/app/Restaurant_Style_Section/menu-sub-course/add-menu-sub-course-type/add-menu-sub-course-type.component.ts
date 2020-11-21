import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-menu-sub-course-type',
  templateUrl: './add-menu-sub-course-type.component.html',
  styleUrls: ['./add-menu-sub-course-type.component.css']
})
export class AddMenuSubCourseTypeComponent implements OnInit {
  addCourseTypeForm: FormGroup;
  submitted = false;

  scmname;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.addCourseTypeForm = this.formbuilder.group(
      {
        scmname: ['', Validators.required],
      }

    )
  }
  get f() { return this.addCourseTypeForm.controls; }

  save() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addCourseTypeForm.invalid) {
      return;
    }
    else {

    }

  }

}
