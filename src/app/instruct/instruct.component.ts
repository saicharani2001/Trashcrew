import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruct',
  templateUrl: './instruct.component.html',
  styleUrls: ['./instruct.component.css']
})
export class InstructComponent implements OnInit {

  public slides = [
    { src: "../../assets/login.png" },
    { src: "../../assets/emp.jpg" },
    { src: "../../assets/new.jpg" },
    { src: "../../assets/admin.jpg" }
  ];
  display1:boolean=false;
  currentSlide = 0;
  constructor() { }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit(): void {
    this.display1=true;
  }

}
