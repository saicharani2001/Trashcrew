import { Component, OnInit } from '@angular/core';
import { DeviceservService } from '../deviceserv.service';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css']
})
export class AdddeviceComponent implements OnInit {
  display1:boolean=false;
  device={
    name:"",
    location:""
  }
  constructor(private deviceserv:DeviceservService) { }

  ngOnInit(): void {
    this.display1=true;
  }
  submit(){
    const data={
      name:this.device.name,
      location:this.device.location
    }
    this.deviceserv.create(data).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
