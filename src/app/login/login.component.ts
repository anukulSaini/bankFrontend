import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http : HttpClient,
    private router : Router
  ){}

ngOnInit():void{
    this.form = this.formBuilder.group({
      email:'',
      password:''
    })
}

ValidateEmail = (email: any)=>{
  var validRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

  if(email.match(validRegex)){
    return true;
  }
  else{
    return false;
  }
}

submit() : void{
  let user = this.form.getRawValue();
  console.log(user);

  //validate data



  if( user.email=="" || user.password==""){
      Swal.fire("Error","Please enternall the fields")
  }
  else if(!this.ValidateEmail(user.email)){
    Swal.fire("Error","Please enter valid email","error");
  }else{
      this.http.post("http://localhost:5001/api/login",user,{
        withCredentials: true
      })
      .subscribe(()=> this.router.navigate(['/']),(err)=>{
        Swal.fire("Error",err.error.message,"error")//handle error from api
      })
  }





}


}
