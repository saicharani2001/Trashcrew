import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserservService } from '../userserv.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css']
})
export class MainscreenComponent implements OnInit {
  dialog: any;
  display1:boolean=false;
  display:boolean=true;
  constructor(private router:Router,public dialog1: MatDialog,private userserv:UserservService,private snackbar:MatSnackBar) { }
  openDialog(): void {
    if(this.userserv.details!=null){
      this.router.navigate(['routemap']);
    }
    else{
      this.snackbar.open("Login for your route details","OK",{duration:3000});
    }
  }

  ngOnInit(): void {
    if(this.userserv.details!=null){
      this.display1=true;
      this.display=false;
    }
    else{
      this.display1=false;
      this.display=true;
    }
  }
  navTo(path:any){
    this.router.navigate([path]);
  }
}


