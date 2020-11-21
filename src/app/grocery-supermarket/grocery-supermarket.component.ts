import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-grocery-supermarket',
  templateUrl: './grocery-supermarket.component.html',
  styleUrls: ['./grocery-supermarket.component.css']
})
export class GrocerySupermarketComponent implements OnInit {
  grocerysupermarkets:FormGroup;
  submitted = false;

  iname;
  ides;
  isdes;
  ibname;
  icat;
  iscat;
  igst;
  iimages;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this. grocerysupermarkets= this.formbuilder.group(
      {
        iname: ['', Validators.required],
        ides: ['', [Validators.required ,Validators.maxLength(30)]],
        isdes: ['', [Validators.required ,Validators.maxLength(20)]],
        ibname: ['', Validators.required],
        icat: ['', Validators.required],
        iscat: ['', Validators.required],
        igst: ['', Validators.required],
        iimages: ['', Validators.required],
      }

      )
    }
    get f()
  {
   return this.grocerysupermarkets.controls;
  }
  submit(){
    this.submitted = true;
   
    
    if (this.grocerysupermarkets.invalid) {
        return;
    }
    else{

    }
  }
}