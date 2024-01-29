import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const token = inject(TokenService).getToken();
  const router = inject(Router);

  if (!token) {
  router.navigate(['/sign-in']);
  return false;
  }
  return true;
  };
