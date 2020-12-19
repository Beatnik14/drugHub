import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {
  search;
  constructor() { }

  ngOnInit(): void {
  }
  onSearch(){

  }
}
