import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserservService } from '../userserv.service';



  

@Component({
  selector: 'app-routemap',
  templateUrl: './routemap.component.html',
  styleUrls: ['./routemap.component.css']
})
export class RoutemapComponent implements OnInit {
  managers:any=[];
  display1:boolean=false;
  
  constructor(private router:Router,private userserv:UserservService) { }
  
  displayedColumns: string[] = ['devicename','devicelocation','status'];
  displayedColumns1: string[] = ['empname','emparea','status'];

  ngOnInit(): void {
    this.display1=true;
    this.retrieveManagers();
  }
  retrieveManagers() {
    this.userserv.getAll().subscribe(
      data=>{
        this.managers=data;
        console.log(data);
      },
      error=>{
        console.log(error)
      }
    );
  }
  
}
