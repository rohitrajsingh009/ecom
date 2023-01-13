import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellorAuthComponent } from './sellor-auth/sellor-auth.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'seller-auth',component:SellorAuthComponent},
  {path:'seller-home',component:SellerHomeComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
