import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;

  classToDiv = {};

  constructor() {
    this.classToDiv = {
      'text-success': true
    };
   }

  ngOnInit() {
    this.titulo! = "Lorem Ipsum é simplesmente";
    this.texto! = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
  }

}
