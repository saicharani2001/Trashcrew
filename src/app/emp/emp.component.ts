import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  empdetails:any=[];

  constructor(private router:Router,private userserv:UserservService) { }
  displayedColumns: string[] = ['fullname','licenseId','phone','city','place','status','edit','delete','assign'];

  ngOnInit(): void {
    this.retrieveEmpdetails();
  }
  retrieveEmpdetails() {
    this.userserv.getAll().subscribe(
      data=>{
        this.empdetails=data;
        console.log(data);
      },
      error=>{
        console.log(error)
      }
    );
  }
  editDetails(id:any){
    this.empdetails.forEach((element:any) => {
      if(element['licenseId']==id){
        this.userserv.details1=element;
        this.router.navigate(['edit']);
      }
    }
    )
  }
  deleteDriver(lid:any){
    console.log(lid);
    this.userserv.delete(lid).subscribe(
      response=>{
        console.log(response);
        this.ngOnInit();
      },
      error=>{
        console.log(error);
      }
    )
  }
  navTo(){
    this.router.navigate(['registration']);
  }
}
