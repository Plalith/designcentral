import { Component, OnInit } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imageSources = [
    './../../assets/wardrobes/4.jpg',
    './../../assets/wardrobes/2.jpg',
    './../../assets/wardrobes/3.jpg',
    './../../assets/wardrobes/1.jpg',
  ];

}
