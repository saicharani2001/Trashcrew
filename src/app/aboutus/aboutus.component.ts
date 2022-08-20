import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserservService } from '../userserv.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  display:any;
  display1:boolean=false;

  constructor(private router:Router,public dialog1: MatDialog,private userserv:UserservService,private snackbar:MatSnackBar) { }

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

}
