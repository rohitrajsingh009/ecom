import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signup } from '../dataType';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-sellor-auth',
  templateUrl: './sellor-auth.component.html',
  styleUrls: ['./sellor-auth.component.scss']
})
export class SellorAuthComponent {
  constructor(public server:SellerService,public router:Router){

  }
  ngOnInit():void{
    this.server.reloadSeller();
  }

  signup(v:signup):void{
console.log(v)
this.server.userSignUp(v).subscribe((res)=>{
  console.log(res)
  if(res){
    this.server.isSellerLoggedIn.next(true)
    localStorage.setItem('seller',JSON.stringify(res))
    this.router.navigate(['seller-home'])
  }
})
  }
}
