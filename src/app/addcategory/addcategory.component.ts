import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  categoryFormRegistration:FormGroup;
  submitted = false;

  cname;
  sdes;
  dmode ="";
  cimages;



  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.categoryFormRegistration = this.formbuilder.group(
      {

          cname: ['', Validators.required],
          sdes:['', Validators.required],
          dmode:['', Validators.required],
         cimages:['', Validators.required]

        }
       
        )
  }



  get f() { return this.categoryFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.categoryFormRegistration.invalid) {
        return;
    }
    else{
}
  }
}
