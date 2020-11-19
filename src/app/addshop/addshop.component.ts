import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.css']
})
export class AddshopComponent implements OnInit {
  shopFormRegistration:FormGroup;
  submitted = false;

  sname;
  slocation;
  saddress;
  sphonenumber;
  semail;
  slogo;
  slicense;
  sgst;
  sfssai;
  oname;
  oaddress;
  ophonenumber;
  simages;
  otime;
  ctime;
  dmode="";
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.shopFormRegistration = this.formbuilder.group(
      {
        sname: ['', Validators.required],
        slocation: ['', Validators.required],
        saddress: ['', Validators.required],
        sphonenumber: ['', [Validators.required,Validators.minLength(10) ]],
        semail: ['', [Validators.required ,Validators.email]],
        slogo:['', Validators.required],
        slicense: ['', Validators.required],
        sgst:['', Validators.required],
        sfssai:['', Validators.required],
        oname:['', Validators.required],
        oaddress:['', Validators.required],
        ophonenumber:['', Validators.required],
        simages:['',Validators.required],
        otime:['',Validators.required],
        ctime:['',Validators.required],
        dmode:['',Validators.required],

      }
    )
  }
  get f() { return this.shopFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.shopFormRegistration.invalid) {
        return;
    }
    else{

    }

  }

}
