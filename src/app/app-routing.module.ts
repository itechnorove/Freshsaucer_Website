import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component'
import {LoginComponent} from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { ForgotComponent } from './account/forgot/forgot.component';
import { AddressComponent } from './account/address/address.component';
import { ProfileComponent } from './account/profile/profile.component';
import { CityComponent } from './account/city/city.component';
import { VerifyComponent } from './account/verify/verify.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'forgot', component:ForgotComponent},
  {path:'address', component:AddressComponent},
  {path:'profile', component:ProfileComponent},
  {path:'city', component:CityComponent},
  {path:'verify',component:VerifyComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
