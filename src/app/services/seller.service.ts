import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { signup } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
isSellerLoggedIn= new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient,private router:Router) { }
  userSignUp(data:signup){
    return this.http.post('http://localhost:3000/seller',data);
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }
}
