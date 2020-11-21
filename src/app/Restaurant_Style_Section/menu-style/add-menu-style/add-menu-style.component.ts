import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-menu-style',
  templateUrl: './add-menu-style.component.html',
  styleUrls: ['./add-menu-style.component.css']
})
export class AddMenuStyleComponent implements OnInit {
  addMenuStyleForm:FormGroup;
  submitted = false;

  msname;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {this.addMenuStyleForm = this.formbuilder.group(
    {
     msname: ['', Validators.required],
    }
  )
  }

  get f() { return this.addMenuStyleForm.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.addMenuStyleForm.invalid) {
        return;
    }
    else{

    }

  }

}
