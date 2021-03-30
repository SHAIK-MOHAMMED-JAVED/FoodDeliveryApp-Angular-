import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fooditemlist',
  templateUrl: './fooditemlist.component.html',
  styleUrls: ['./fooditemlist.component.css']
})
export class FooditemlistComponent implements OnInit {

  
  foodArray=[];
  restname:string;
  constructor(private us:UserService,private router:Router) { }

  ngOnInit(): void {
    this.us.getAllFoodItems().subscribe(
      res=>{
        this.foodArray = res['message']
      },
      err =>{
        alert("Something went wrong")
        console.log(err)
      }
    )
  }


 
}
