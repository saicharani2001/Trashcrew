import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  display!: boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.display);
  }
  navto(route:any){
    this.router.navigate([route]);
  }
  
}
