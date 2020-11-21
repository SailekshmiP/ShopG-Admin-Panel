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
import { MenuCourseTypeComponent } from './Restaurant_Style_Section/menu-course-type/menu-course-type.component';
import { MenuSubCourseComponent } from './Restaurant_Style_Section/menu-sub-course/menu-sub-course.component';
import { MenuStyleComponent } from './Restaurant_Style_Section/menu-style/menu-style.component';
import { AddMenuCourseTypeComponent } from './Restaurant_Style_Section/menu-course-type/add-menu-course-type/add-menu-course-type.component';
import { EditMenuCourseTypeComponent } from './Restaurant_Style_Section/menu-course-type/edit-menu-course-type/edit-menu-course-type.component';
import { AddMenuStyleComponent } from './Restaurant_Style_Section/menu-style/add-menu-style/add-menu-style.component';
import { EditMenuStyleComponent } from './Restaurant_Style_Section/menu-style/edit-menu-style/edit-menu-style.component';
import { AddMenuSubCourseTypeComponent } from './Restaurant_Style_Section/menu-sub-course/add-menu-sub-course-type/add-menu-sub-course-type.component';
import { EditMenuSubCourseTypeComponent } from './Restaurant_Style_Section/menu-sub-course/edit-menu-sub-course-type/edit-menu-sub-course-type.component';
import { RestaurantMenuPointedToShopComponent } from './restaurant-menu-pointed-to-shop/restaurant-menu-pointed-to-shop.component';
import { BusinessModelsComponent } from './business-models/business-models.component';
import { GrocerySupermarketComponent } from './grocery-supermarket/grocery-supermarket.component';

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
    AddmenuComponent,
    MenuCourseTypeComponent,
    MenuSubCourseComponent,
    MenuStyleComponent,
    AddMenuCourseTypeComponent,
    EditMenuCourseTypeComponent,
    AddMenuStyleComponent,
    EditMenuStyleComponent,
    AddMenuSubCourseTypeComponent,
    EditMenuSubCourseTypeComponent,
    RestaurantMenuPointedToShopComponent,
    BusinessModelsComponent,
    GrocerySupermarketComponent,
    
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
