import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from '../auth/components/login-form/login-form.component';
import { SigninComponent } from '../auth/pages/signin/signin.component';
import { SignupComponent } from '../auth/pages/signup/signup.component';
import { ForgotPasswordComponent } from '../auth/pages/forgot-password/forgot-password.component';
import { RecoveryPasswordComponent } from '../auth/pages/recovery-password/recovery-password.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { authGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [authGuard],
    component: HomeComponent
  },
  {
    path: 'home/product/:id',
    canActivate: [authGuard],
    component: ProductDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
