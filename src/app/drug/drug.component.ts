import { Component, Input, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 7000, noPause: true, showIndicators: true } }
  ]
})
export class DrugComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() drug;
}
