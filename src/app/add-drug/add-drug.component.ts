import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent implements OnInit {
  addProductForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      description: new FormControl(null, Validators.required),
      
    });
  }
  onSubmit() {
   
   
  }
  }
