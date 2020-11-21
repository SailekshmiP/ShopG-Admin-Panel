import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-menu-style',
  templateUrl: './edit-menu-style.component.html',
  styleUrls: ['./edit-menu-style.component.css']
})
export class EditMenuStyleComponent implements OnInit {
  editMenuStyleForm:FormGroup;
  submitted = false;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {this.editMenuStyleForm = this.formbuilder.group(
    {
     msname: ['', Validators.required],
    }
  )
  }

  get f() { return this. editMenuStyleForm.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this. editMenuStyleForm.invalid) {
        return;
    }
    else{

    }

  }

}
