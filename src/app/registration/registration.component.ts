import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserservService } from '../userserv.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm={
    fullname:"",
    age:null,
    licenseId:"",
    phone:null,
    password:"",
    cnpassword:"",
    city:"",
    place:"",
    pincode:null,
    street:""
  }
  display1=false;
  constructor(private router:Router,private userserv:UserservService,private snackBar:MatSnackBar) { 
  }
  
  ngOnInit(): void {
    this.registerForm.fullname="",
    this.registerForm.age=null,
    this.registerForm.licenseId="",
    this.registerForm.phone=null,
    this.registerForm.password="",
    this.registerForm.cnpassword="",
    this.registerForm.city="",
    this.registerForm.place="",
    this.registerForm.pincode=null,
    this.registerForm.street="";
    this.display1=true;
  }
  navtologin(){
    this.router.navigate(['login']);
  }
  display(){
    console.log(this.registerForm);
    if(this.registerForm.password!=this.registerForm.cnpassword){
      this.snackBar.open("password and confirm password not matched","ok",{duration:2000});
    }
    else{
      const data={
        fullname:this.registerForm.fullname,
        age:this.registerForm.age,
        licenseId:this.registerForm.licenseId,
        phone:this.registerForm.phone,
        password:this.registerForm.password,
        city:this.registerForm.city,
        place:this.registerForm.place,
        pincode:this.registerForm.pincode,
        street:this.registerForm.street
      }
      this.userserv.create(data).subscribe(response=>{
        console.log(response);
        this.registerForm.fullname="",
        this.registerForm.age=null,
        this.registerForm.licenseId="",
        this.registerForm.phone=null,
        this.registerForm.password="",
        this.registerForm.cnpassword="",
        this.registerForm.city="",
        this.registerForm.place="",
        this.registerForm.pincode=null,
        this.registerForm.street="";
        this.snackBar.open("Registered Successfully","OK",{duration:3000});
      },
      error=>{
        console.log(error);
      });
    }
  }
}
