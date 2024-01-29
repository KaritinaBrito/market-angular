import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../../services/auth.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { RequestStatus } from '../../../../models/request-status.model';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLinkWithHref],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  formSubmited: RequestStatus = 'init';
  loginForm: any = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor(){
    this.route.queryParamMap.subscribe(params => {
      const email = params.get('email');
      if(email){
        this.loginForm.controls.email.setValue(email);
      }
    })
  }

  doLogin(){
    if(this.loginForm.valid){
      this.formSubmited = 'loading';
      const {email, password} = this.loginForm.getRawValue();
      this.authService.login(email, password)
      .subscribe({
        next:()=>{
          this.router.navigate(['/home']);
          this.formSubmited = 'success';
        },
        error:()=>{
          this.formSubmited = 'failed';
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}

