import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../Emmiters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  message=""

  constructor(private http:HttpClient){}

    ngOnInit():void{
      this.http.get("http://localhost:5001/api/user",{
        withCredentials:true//pass jsonwebtoken
      })
      .subscribe((res:any)=>{
        this.message=`hi ${res.name}`;
        Emitters.authEmitters.emit(true)
      },
      (err)=>{
        this.message="You are not looged in"
        Emitters.authEmitters.emit(false)
      }
      );

    }

}
