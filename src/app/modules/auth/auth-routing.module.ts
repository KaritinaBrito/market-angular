import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';
import { redirectGuard } from '../../guards/redirect.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    canActivate: [redirectGuard],
    component: SigninComponent
  },
  {
    path: 'sign-up',
    canActivate: [redirectGuard],
    component: SignupComponent
  },
  {
    path: 'forgot-password',
    canActivate: [redirectGuard],
    component: ForgotPasswordComponent
  },
  {
    path: 'recovery-password',
    canActivate: [redirectGuard],
    component: RecoveryPasswordComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
