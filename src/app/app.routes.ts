import { Routes } from '@angular/router';
import { SigninComponent } from './modules/auth/pages/signin/signin.component';
import { SignupComponent } from './modules/auth/pages/signup/signup.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailsComponent } from './modules/home/components/product-details/product-details.component';
import { RecoveryPasswordComponent } from './modules/auth/pages/recovery-password/recovery-password.component';
import { ForgotPasswordComponent } from './modules/auth/pages/forgot-password/forgot-password.component';
import { authGuard } from './guards/auth.guard';
import { redirectGuard } from './guards/redirect.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];
