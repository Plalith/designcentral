import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.css']
})
export class WardrobeComponent implements OnInit {
  progress:Number=0;
  steps:Number=1;
  constructor() { }

  ngOnInit() {
  }
  
  step1(form:NgForm) {
    console.log(form);
    this.progress = 20;
    this.steps=2
  }
  step2(form:NgForm) {
    console.log(form);
    this.progress = 40;
    this.steps=3;
  }
  step3(form:NgForm) {
    console.log(form);
    this.progress = 60;
    this.steps=4;
  }
}
