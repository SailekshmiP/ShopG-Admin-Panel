import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AddshopComponent } from './addshop/addshop.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { EditlocationComponent } from './editlocation/editlocation.component';
import { EditmenuitemsComponent } from './editmenuitems/editmenuitems.component';
import { EditshopComponent } from './editshop/editshop.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { ReportsComponent } from './reports/reports.component';
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




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
