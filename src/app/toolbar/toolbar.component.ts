import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainscreenComponent } from '../mainscreen/mainscreen.component';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input()
  display!: boolean;
  constructor(private router:Router,private userserv:UserservService,private ms:MainscreenComponent) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['mainscreen']);
    this.userserv.details=null;
    this.ms.ngOnInit();
  }
}
