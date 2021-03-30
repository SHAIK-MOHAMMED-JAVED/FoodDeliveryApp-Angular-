import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
re
  constructor(private us:UserService, private router:Router) { }

  ngOnInit(): void {
    
  }

  register(){
   
    //navigate to register
    this.router.navigateByUrl("/signup")
  }
  onSubmit(formRef){
    let userObj = formRef.value;
    console.log(userObj)

    if(userObj.usertype=="user"){

      this.us.loginUserData(userObj).subscribe(
        res=>{
          if(res["message"]=="Login success"){

            //saveing token and username in browser memory
            localStorage.setItem("token",res["token"])
            localStorage.setItem("username",res["username"])
            alert(res["message"])

            //navigate to user dashboard
            this.router.navigateByUrl("/userhomepage")
          }
          else{
            console.log(res["reason"])
          }
        },
        err=>{
          console.log(err)
        }
      )

    }
//admin
    if(userObj.usertype=="admin"){

      this.us.loginAdminData(userObj).subscribe(
        res=>{
          if(res["message"]=="Login success"){

            //saveing token and username in browser memory
            localStorage.setItem("token",res["token"])
            localStorage.setItem("username",res["username"])
            alert(res["message"])

            //navigate to user dashboard
            this.router.navigateByUrl("/adminhomepage")
          }
          else{
            console.log(res["reason"])
          }
        },
        err=>{
          console.log(err)
        }
      )

    }

}
}
