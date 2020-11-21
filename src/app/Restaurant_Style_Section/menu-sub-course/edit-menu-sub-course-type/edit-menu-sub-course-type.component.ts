import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-menu-sub-course-type',
  templateUrl: './edit-menu-sub-course-type.component.html',
  styleUrls: ['./edit-menu-sub-course-type.component.css']
})
export class EditMenuSubCourseTypeComponent implements OnInit {
  editSubCourseTypeForm:FormGroup;
  submitted = false;

  scmname;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.editSubCourseTypeForm = this.formbuilder.group(
      {
        scmname: ['', Validators.required],
      }
            
      )
     }
     get f() { return this.editSubCourseTypeForm.controls; }

     submit(){
       this.submitted = true;
   
       // stop here if form is invalid
       if (this.editSubCourseTypeForm.invalid) {
           return;
       }
       else{
   
       }
   
     }
   
   }
     
     