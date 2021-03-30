import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private hc:HttpClient) { }

  saveUserData(userObjData):Observable<any>
  {
    return this.hc.post("/user/createuser",userObjData)
  }

  loginUserData(userObj):Observable<any>
  {
    return this.hc.post("/user/login",userObj)
  }
    
  loginAdminData(userObj):Observable<any>
  {
    return this.hc.post("/admin/loginadmin",userObj)
  }

  addFoodItems(foodObj):Observable<any>
  {
    return this.hc.post("/food/createfood",foodObj)
  }

  getAllFoodItems():Observable<any>
  {
    return this.hc.get("/food/getFoodItems")
  }

  

 
}
