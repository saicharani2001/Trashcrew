import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserservService } from '../userserv.service';
import { FeedbackservService } from '../feedbackserv.service';
@Component({
  selector: 'app-fbkpage',
  templateUrl: './fbkpage.component.html',
  styleUrls: ['./fbkpage.component.css']
})
export class FbkpageComponent implements OnInit {
  feedbacks:any;
  display:any;
  display1:boolean=false;
  constructor(private router:Router,private fbserv:FeedbackservService,private userserv:UserservService ) { }
  displayedColumns: string[] = ['location','issues','lid'];
  ngOnInit(): void {
    this.retrieveFeedback();
    if(this.userserv.details!=null){
      this.display1=true;
      this.display=false;
    }
    else{
      this.display1=false;
      this.display=true;
    }
  }
  retrieveFeedback() {
    this.fbserv.getAll().subscribe(
      data=>{
        this.feedbacks=data;
        console.log(data);
      },
      error=>{
        console.log(error)
      }
    );
  }

}
