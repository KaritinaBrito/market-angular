import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../../utils/validators';

import { RequestStatus } from '../../models/request-status.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  status: RequestStatus = 'init';
  statusUser: RequestStatus = 'init';
  formSubmited: boolean = false;
  showRegister = false;

  formUser: any = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  registerForm: any = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  },{
    validators: [ CustomValidators.MatchValidator('password', 'confirmPassword') ]
  });

  constructor(){}

  register(){
    if(this.registerForm.valid){
      this.status =  'loading';
      const { name, email, password} = this.registerForm.getRawValue();
      this.authService.registerAndLogin(name, email, password)
        .subscribe({
          next:()=>{
            this.status = 'success';
            this.router.navigate([''])
          },
          error:(error)=>{
            this.status = 'failed';
            console.log(error);
          }
        })
    } else{
      this.registerForm.markAllAsTouched();
    }
  }

  validateUser(){
    if(this.formUser.valid){
      this.statusUser = 'loading';
      const { email} = this.formUser.getRawValue();
      this.authService.isAvailable(email)
        .subscribe({
          next:(rta)=>{
            this.status = 'success';
            if(rta.isAvailable){
              this.showRegister = true;
              this.registerForm.controls.email.setValue(email);
            } else {
              this.router.navigate(['/sign-in'], {
                queryParams: { email }
              });
            }
          },
          error:(error)=>{
            this.status = 'failed';
            console.log(error);
          }
        })
    } else{
      this.formUser.markAllAsTouched();
    }
  }
}
