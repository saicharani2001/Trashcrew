import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FeedbackservService } from '../feedbackserv.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  issues="";
  areas = [
    {value:'default', viewValue:'Default'},
    {value: 'nrt', viewValue: 'Narasaraopeta'},
    {value: 'gnt', viewValue: 'Guntur'},
    {value: 'pdrl', viewValue: 'Piduguralla'},
  ];
  selected="default";
  lid="";
  constructor(private router:Router,private fbserv:FeedbackservService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.selected="",
    this.issues="",
    this.lid="";
    
  }
  submit(){
    const data={
      location:this.selected,
      issues:this.issues,
      lid:this.lid,
    }
    console.log(data);
    this.fbserv.create(data).subscribe(
      response=>{
        console.log(response);
        this.selected="default",
        this.lid="",
        this.issues="";
        this.snackbar.open("Feedback Submitted Successfully","OK",{duration:3000})
      },
      error=>{
        console.log(error);
      }
    )
  }
}
