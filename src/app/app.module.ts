import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { CityComponent } from './account/city/city.component';
import { ForgotComponent } from './account/forgot/forgot.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { VerifyComponent } from './account/verify/verify.component';
import { AddressComponent } from './account/address/address.component';
import { ProfileComponent } from './account/profile/profile.component';
import { OrderComponent } from './account/order/order.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CategorydetailsComponent,
    CityComponent,
    ForgotComponent,
    LoginComponent,
    SignupComponent,
    VerifyComponent,
    AddressComponent,
    ProfileComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
