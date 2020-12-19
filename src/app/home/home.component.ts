import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mouseEnter = false;
  constructor() { }

  ngOnInit(): void {
  }
  giveDonation(){
    this.mouseEnter = !this.mouseEnter;
    console.log(this.mouseEnter)
  }
  getDonation(){
    console.log('b')
  }
}
