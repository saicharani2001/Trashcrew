import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ManagerservService } from '../managerserv.service';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    username:"",
    password:""
  }
  details:any;
  constructor(private router:Router,private userserv:UserservService,private snackBar:MatSnackBar,private managerserv:ManagerservService) { }

  ngOnInit(): void {
    this.user.username="",
    this.user.password=""
  }
  navtoRegister(){
    this.router.navigate(['registration']);
  }
  login(){
    console.log(this.user);
    this.userserv.get(this.user.username).subscribe(
      data=>{
        this.details=data;
        if(this.details["password"]==this.user.password){
          this.userserv.details=this.details;
          this.router.navigate(['mainscreen']);
        }
        else{
          this.snackBar.open("password incorrect","ok",{duration:2000});
        }
      },
      error=>{
        this.managerserv.get(this.user.username).subscribe(
          data=>{
            this.details=data;
            if(this.details["password"]==this.user.password){
              this.userserv.details=this.details;
              this.router.navigate(['mainscreen']);
            }
          },
          error=>{
            console.log(error);
            this.snackBar.open("No User Found","OK",{duration:3000});
          }
        )
      }
    )
  }
}
