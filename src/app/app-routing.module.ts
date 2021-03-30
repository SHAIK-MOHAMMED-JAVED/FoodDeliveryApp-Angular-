import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfooditemComponent } from './addfooditem/addfooditem.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AppComponent } from './app.component';
import { ClicktoeatComponent } from './clicktoeat/clicktoeat.component';
import { DefaultbgimgComponent } from './defaultbgimg/defaultbgimg.component';
import { DefaultnavbarComponent } from './defaultnavbar/defaultnavbar.component';
import { LoginComponent } from './login/login.component';
import { ReadfooditemComponent } from './readfooditem/readfooditem.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';

const routes: Routes = [ 
  {path:"default",component:AppComponent},
  {path:"clicktoeat", component:ClicktoeatComponent},
  {path:"navbar",component:DefaultnavbarComponent},
  {path:"loginform",component:LoginComponent,children:[
    {path:"signup",component:SignupComponent},
  ]},
  {path:"signup",component:SignupComponent},
  {path:"adminhomepage",component:AdminhomepageComponent,children:[
    {path:"addfooditem",component:AddfooditemComponent},
    {path:"readfooditem",component:ReadfooditemComponent}
  ]},
  {path:"bgimg",component:DefaultbgimgComponent},
  {path:"userhomepage",component:UserhomepageComponent},
  
  {path:"",redirectTo:"/clicktoeat",pathMatch:"full"}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
