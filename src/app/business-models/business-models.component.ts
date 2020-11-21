import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-models',
  templateUrl: './business-models.component.html',
  styleUrls: ['./business-models.component.css']
})
export class BusinessModelsComponent implements OnInit {
  businessmodels:FormGroup;
  submitted = false;

  bmname;
  bmtype;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this. businessmodels= this.formbuilder.group(
      {
        bmname: ['', Validators.required],
        bmtype: ['', Validators.required],
      }

      )
    }
    get f()
  {
   return this.businessmodels.controls;
  }
  submit(){
    this.submitted = true;
   
    
    if (this.businessmodels.invalid) {
        return;
    }
    else{

    }
  }
}