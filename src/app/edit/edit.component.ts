import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  empDetails:any;
  display: boolean = false;
  display1:boolean=false;
  constructor(private userserv:UserservService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.empDetails=this.userserv.details1;
    this.display=false;
    this.display1=true;
  }
  updateDetails(){
    const data={
      fullname:this.empDetails.fullname,
      age:this.empDetails.age,
      licenseId:this.empDetails.licenseId,
      phone:this.empDetails.phone,
      password:this.empDetails.password,
      city:this.empDetails.city,
      place:this.empDetails.place,
      pincode:this.empDetails.pincode,
      street:this.empDetails.street,
      status:this.empDetails.status
    }
    this.userserv.update(this.empDetails.licenseId,data).subscribe(
      response=>{
        console.log(response);
        this.snackbar.open("Updated Successfully","ok",{duration:3000});
        this.display=true;
      },
      error=>{
        console.log(error);
      }
    )
  }
}
