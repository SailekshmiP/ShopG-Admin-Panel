import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-menu-pointed-to-shop',
  templateUrl: './restaurant-menu-pointed-to-shop.component.html',
  styleUrls: ['./restaurant-menu-pointed-to-shop.component.css']
})
export class RestaurantMenuPointedToShopComponent implements OnInit {
  restaurantMenuPointedtoShop: FormGroup;
  submitted = false;

  csid:any = "";
  cmid:any = "";
  ptime;
  matime;
  mctime;
  mdamnt;
  mdperct;
  sprice;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.restaurantMenuPointedtoShop = this.formbuilder.group(
      {
        // cmname: ['', Validators.required],
        csid: ['', Validators.required],
        cmid: ['', Validators.required],
        ptime: ['', Validators.required],
        matime: ['', Validators.required],
        mctime: ['', Validators.required],
        mdamnt: ['', Validators.required],
        mdtime: ['', Validators.required],
        mdperct: ['', Validators.required],
        sprice: ['', Validators.required],
      }

    )
  }
  get f()
  {
   return this.restaurantMenuPointedtoShop.controls;
  }
  submit(){
    this.submitted = true;
   
   
    if (this.restaurantMenuPointedtoShop.invalid) {
        return;
    }
    else{

    }
  }
}