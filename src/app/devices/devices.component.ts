import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceservService } from '../deviceserv.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices:any=[];
  displayedColumns: string[] = ['devicename','devicelocation','status'];
  constructor(private router:Router,private deviceserv:DeviceservService) { }

  ngOnInit(): void {
    this.deviceserv.get().subscribe(
      data=>{
        console.log(data);
        this.devices=data;
      },
      error=>{
        console.log(error);
      }
    )
  }
  navTo(){
    this.router.navigate(['adddevice']);
  }
}
