import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-drug',
  templateUrl: './get-drug.component.html',
  styleUrls: ['./get-drug.component.css']
})
export class GetDrugComponent implements OnInit {

    addProductForm: FormGroup;
  constructor() { }
  
  
  hide = true;
  loginForm: FormGroup;


  

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password: new FormControl(null, Validators.required)
    });
    

  }
  onSubmit() {

    console.log(this.loginForm);
    console.log(this.loginForm.controls.username.value);
    console.log(this.loginForm.controls.password.value);
    
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
