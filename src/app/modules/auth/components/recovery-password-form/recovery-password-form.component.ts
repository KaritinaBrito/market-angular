import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';

import { AuthService } from '../../../../services/auth.service';
import { RequestStatus } from '../../../../models/request-status.model';
import { CustomValidators } from '../../../../utils/validators';

@Component({
  selector: 'app-recovery-password-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLinkWithHref],
  templateUrl: './recovery-password-form.component.html',
  styleUrl: './recovery-password-form.component.css'
})
export class RecoveryPasswordFormComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  status: RequestStatus = 'init';
  token= '';

  constructor(){
    this.route.queryParamMap.subscribe(params => {
      const token = params.get('token');
      if(token){
        this.token = token;
      } else{
        this.router.navigate(['/sign-in']);
      }
    })
  }

  recoveryForm: any = this.fb.nonNullable.group({
    newPassword: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]],
    },{
      validators: [
        CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
      ],
  });

  recovery() {
    if (this.recoveryForm.valid) {
      const { newPassword } = this.recoveryForm.getRawValue();
      this.status = 'loading';
      this.authService.changePassword(this.token, newPassword)
      .subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/sign-in']);
        },
        error: () => {
          this.status = 'failed';
          console.log(newPassword);
        }
      })
    } else {
      this.recoveryForm.markAllAsTouched();
    }
  }

  recovery2() {
    if (this.recoveryForm.valid) {
      const { newPassword } = this.recoveryForm.getRawValue();
      this.status = 'loading';
      this.authService.changePassword(this.token, newPassword)
      .subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/login']);
        },
        error: () => {
          this.status = 'failed';
        }
      })
    } else {
      this.recoveryForm.markAllAsTouched();
    }
  }

}
