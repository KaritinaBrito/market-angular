import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const redirectGuard: CanActivateFn = () => {
  const isValidToken: string | unknown = inject(TokenService).getToken();
  if (isValidToken) {
    inject(Router).navigate(['/']);
  }
  return true;

};
