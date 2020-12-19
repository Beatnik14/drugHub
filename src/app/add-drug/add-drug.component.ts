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
 
  
  
  hide = true;
  loginForm: FormGroup;


  

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      drugName: new FormControl(null, [Validators.minLength(6)]),
      expireDate: new FormControl(null ),
      drugType: new FormControl(null ),
      drugRange: new FormControl(null ),
      drugDescription: new FormControl(null ),
      mobileNumber: new FormControl(null ),
      
    });
    

  }
  onSubmit() {

    console.log(this.loginForm);
    console.log(this.loginForm.controls.drugName.value);
    console.log(this.loginForm.controls.expireDate.value);
    console.log(this.loginForm.controls.drugType.value);
    console.log(this.loginForm.controls.drugRange.value);
    console.log(this.loginForm.controls.drugDescription.value);
    console.log(this.loginForm.controls.mobileNumber.value);
    
  }

getUserbaneErrorMessage(){
  const usernameControl = this.loginForm.get('username');
  if(usernameControl.errors.required){
    return 'username is required'
  }else if(usernameControl.errors.minlength){
    return `you need to enter ${usernameControl.errors.minlength.requiredLength} characters`
  }else if(usernameControl.errors.customEmailValidation){
    return 'please enter valid email'
  }
  
  }
  
  }
