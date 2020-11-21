import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AddshopComponent } from './addshop/addshop.component';
import { BusinessModelsComponent } from './business-models/business-models.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { EditlocationComponent } from './editlocation/editlocation.component';
import { EditmenuitemsComponent } from './editmenuitems/editmenuitems.component';
import { EditshopComponent } from './editshop/editshop.component';
import { GrocerySupermarketComponent } from './grocery-supermarket/grocery-supermarket.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { ReportsComponent } from './reports/reports.component';
import { RestaurantMenuPointedToShopComponent } from './restaurant-menu-pointed-to-shop/restaurant-menu-pointed-to-shop.component';
import { AddMenuCourseTypeComponent } from './Restaurant_Style_Section/menu-course-type/add-menu-course-type/add-menu-course-type.component';
import { EditMenuCourseTypeComponent } from './Restaurant_Style_Section/menu-course-type/edit-menu-course-type/edit-menu-course-type.component';
import { MenuCourseTypeComponent } from './Restaurant_Style_Section/menu-course-type/menu-course-type.component';
import { AddMenuStyleComponent } from './Restaurant_Style_Section/menu-style/add-menu-style/add-menu-style.component';
import { EditMenuStyleComponent } from './Restaurant_Style_Section/menu-style/edit-menu-style/edit-menu-style.component';
import { MenuStyleComponent } from './Restaurant_Style_Section/menu-style/menu-style.component';
import { AddMenuSubCourseTypeComponent } from './Restaurant_Style_Section/menu-sub-course/add-menu-sub-course-type/add-menu-sub-course-type.component';
import { EditMenuSubCourseTypeComponent } from './Restaurant_Style_Section/menu-sub-course/edit-menu-sub-course-type/edit-menu-sub-course-type.component';
import { MenuSubCourseComponent } from './Restaurant_Style_Section/menu-sub-course/menu-sub-course.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'location',component:LocationComponent},
  {path:'addlocation',component:AddlocationComponent},
  {path:'addcategory',component:AddcategoryComponent},
  {path:'addshop',component:AddshopComponent},
  {path:'editcategory',component:EditcategoryComponent},
  {path:'editlocation',component:EditlocationComponent},
  {path:'editshop',component:EditshopComponent},
  {path:'menuitems',component:MenuitemsComponent},
  {path:'addmenu',component:AddmenuComponent},
  {path:'editmenuitems',component:EditmenuitemsComponent},
  {path:'reports',component:ReportsComponent},
  {path:'businessmodels',component:BusinessModelsComponent},
  {path:'grocerysupermarkets',component:GrocerySupermarketComponent},

 
  // RESTAURENT MENU ROUTES 

  {path:'menu-course-type',component:MenuCourseTypeComponent},
  {path:'menu-sub-course',component:MenuSubCourseComponent},
  {path:'menu-style',component:MenuStyleComponent},

// ADD EDIT MENU COURSE TYPE

{path:'add-menu-course-type',component:AddMenuCourseTypeComponent},
{path:'edit-menu-course-type',component:EditMenuCourseTypeComponent},

// ADD EDIT MENU TYPE

{path:'add-menu-style-type',component:AddMenuStyleComponent},
{path:'edit-menu-style-type',component:EditMenuStyleComponent},


// ADD EDIT MENU SUB COURSE TYPE

{path:'add-menu-sub-course-type',component:AddMenuSubCourseTypeComponent},
{path:'edit-menu-sub-course-type',component:EditMenuSubCourseTypeComponent},


//RESTAURANT MENU POINTED TO SHOP

{path:'restaurant-men-pointed-to-shop',component:RestaurantMenuPointedToShopComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
