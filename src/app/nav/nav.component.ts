import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../Emmiters/emitters';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  authenticated = false

  constructor(private http:HttpClient){}

  ngOnInit():void{
    Emitters.authEmitters.subscribe((auth:boolean)=>{
      this.authenticated=auth
    })
  }
  logOut(){
    this.http.post('http://localhost:5001/api/logOut',{},{withCredentials:true})
    .subscribe(()=> this.authenticated=false)
  }

}
