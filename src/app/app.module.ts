import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ShopComponent } from './shop/shop.component';
import { LocationComponent } from './location/location.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { EditshopComponent } from './editshop/editshop.component';
import { AddshopComponent } from './addshop/addshop.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { EditlocationComponent } from './editlocation/editlocation.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { EditmenuitemsComponent } from './editmenuitems/editmenuitems.component';
import { ReportsComponent } from './reports/reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddmenuComponent } from './addmenu/addmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AddcategoryComponent,
    ShopComponent,
    LocationComponent,
    EditcategoryComponent,
    EditshopComponent,
    AddshopComponent,
    AddlocationComponent,
    EditlocationComponent,
    MenuitemsComponent,
    EditmenuitemsComponent,
    ReportsComponent,
    AddmenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
