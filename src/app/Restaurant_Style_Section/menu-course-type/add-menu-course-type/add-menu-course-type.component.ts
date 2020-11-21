import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-menu-course-type',
  templateUrl: './add-menu-course-type.component.html',
  styleUrls: ['./add-menu-course-type.component.css']
})
export class AddMenuCourseTypeComponent implements OnInit {
  addCourseTypeForm:FormGroup;
  submitted = false;


  cmname;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
   this.addCourseTypeForm = this.formbuilder.group(
 {
  cmname: ['', Validators.required],
 }
       
 )
}
get f() { return this.addCourseTypeForm.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.addCourseTypeForm.invalid) {
        return;
    }
    else{

    }

  }

}

