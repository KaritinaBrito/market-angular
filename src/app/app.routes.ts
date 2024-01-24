import { Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RecoveryPasswordComponent } from './components/auth/recovery-password/recovery-password.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-in', component: SigninComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'recovery-password', component: RecoveryPasswordComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: '**', component: NotFoundComponent},
];
