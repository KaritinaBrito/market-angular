import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RequestStatus } from '../../models/request-status.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, RouterLinkWithHref],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.css'
})
export class ForgotPasswordFormComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  status: RequestStatus = 'init';

  forgotForm: any = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  })

  validateUser(){}

  sendLink(){
    if(this.forgotForm.valid){
      this.status = 'loading'
      const {email} = this.forgotForm.getRawValue();
      this.authService.recovery(email)
      .subscribe({
        next: ()=>{
          this.status = 'success'
        },
        error: ()=>{
          this.status = 'failed'
        }
      })
    } else{
      this.forgotForm.markAllAsTouched();
    }
  }
}
