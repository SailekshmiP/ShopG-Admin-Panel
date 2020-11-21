import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {
  menuFormRegistration:FormGroup;
  submitted = false;
  
  mname;
  sdes;
  des;  
  mtype="";
  mctype="";
  msctype="";
  mstyle="";
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.menuFormRegistration = this.formbuilder.group(
      {
        mname: ['', Validators.required],
        sdes:['', [Validators.required,Validators.maxLength(20) ]],
        des: ['', [Validators.required ,Validators.maxLength(50) ]],
        mtype: ['', Validators.required],
        mctype: ['', Validators.required],
        msctype: ['', Validators.required],
        mstyle: ['', Validators.required],
    })

  }
get f() { return this.menuFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.menuFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}