import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DrugModel } from '../models/drug.model';
import {DrugServiceService} from '../services/drug-service.service'

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent implements OnInit {
  addProductForm: FormGroup;
  constructor(private drugService: DrugServiceService) { }
  
 
  
  
  hide = true;
  AddDrugForm: FormGroup;


  

  ngOnInit(): void {
    this.AddDrugForm = new FormGroup({
      drugName: new FormControl(null, [Validators.minLength(6)]),
      expireDate: new FormControl(null ),
      drugType: new FormControl(null ),
      drugQuantity: new FormControl(null ),
      drugDescription: new FormControl(null ),
      mobileNumber: new FormControl(null ),
      
    });
    

  }
  onSubmit() {
       let newDrug = new DrugModel
       (
         this.AddDrugForm.controls.drugName.value,
         this.AddDrugForm.controls.expireDate.value, 
         this.AddDrugForm.controls.drugType.value, 
         this.AddDrugForm.controls.drugQuantity.value, 
         this.AddDrugForm.controls.drugDescription.value, 
         this.AddDrugForm.controls.mobileNumber.value
         );
         this.drugService.addDrug(newDrug)
         .subscribe()
    console.log(this.AddDrugForm);
    console.log(this.AddDrugForm.controls.drugName.value);
    console.log(this.AddDrugForm.controls.expireDate.value);
    console.log(this.AddDrugForm.controls.drugType.value);
    console.log(this.AddDrugForm.controls.drugQuantity.value);
    console.log(this.AddDrugForm.controls.drugDescription.value);
    console.log(this.AddDrugForm.controls.mobileNumber.value);
    
  }


  
  }
