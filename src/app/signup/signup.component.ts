import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private us:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl("/loginform")
  }

  onSubmit(formRef){
    this.us.saveUserData(formRef).subscribe(
      res=>{
        if(res["message"]=="Registration done successfully"){
          alert("Account created successfully")
          this.router.navigateByUrl("/login")
        }
        else{
          alert("You have already registered. Login to continue!")
        }
      },
      err=>{alert("something went wrong")
    console.log(err)
  }
    )
   
  }
}
