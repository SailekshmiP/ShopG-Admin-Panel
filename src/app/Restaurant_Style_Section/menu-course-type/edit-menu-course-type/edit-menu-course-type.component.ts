import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-menu-course-type',
  templateUrl: './edit-menu-course-type.component.html',
  styleUrls: ['./edit-menu-course-type.component.css']
})
export class EditMenuCourseTypeComponent implements OnInit {
  editCourseTypeForm:FormGroup;
  submitted = false;

  cmname;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this. editCourseTypeForm = this.formbuilder.group(
      {
        cmname: ['',Validators.required],
       }
             
       )
      }
      get f() { return this.editCourseTypeForm.controls; }

      submit(){
        this.submitted = true;
    
        // stop here if form is invalid
        if (this.editCourseTypeForm.invalid) {
            return;
        }
        else{
    
        }
    
      }
    
    }