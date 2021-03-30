import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultnavbarComponent } from './defaultnavbar/defaultnavbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DefaultbgimgComponent } from './defaultbgimg/defaultbgimg.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { FooterComponent } from './footer/footer.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import {HttpClientModule} from '@angular/common/http';
import { ClicktoeatComponent } from './clicktoeat/clicktoeat.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AddfooditemComponent } from './addfooditem/addfooditem.component';
import { FooditemlistComponent } from './fooditemlist/fooditemlist.component';
import { ReadfooditemComponent } from './readfooditem/readfooditem.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultnavbarComponent,
    LoginComponent,
    SignupComponent,
    DefaultbgimgComponent,
    PrecautionsComponent,
    FooterComponent,
    UserhomepageComponent,
    ClicktoeatComponent,
    CarouselComponent,
    AdminhomepageComponent,
    AddfooditemComponent,
    FooditemlistComponent,
    ReadfooditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
