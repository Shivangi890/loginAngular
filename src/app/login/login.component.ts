import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      firstName:[],
      lastName:[],
      address:this.fb.array([this.addAddressGroup()])
    });
  }
  addAddressGroup(){
    return this.fb.group({
      streetAddress:[],
      city:[],
      state:[],
      zipcode:[]
    });
  }
  addAddress(){
    this.addressArray.push(this.addAddressGroup());
  }
  removeAddress(index:number){
    this.addressArray.removeAt(index);
  }
  get addressArray(){
    return <FormArray>this.loginForm.get('address');
  }
  submit(){
    console.log(this.loginForm.value);
  }

}
