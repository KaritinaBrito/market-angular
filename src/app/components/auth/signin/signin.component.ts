import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  private fb = inject(FormBuilder);

  formSubmited: boolean = false;
  loginForm: any = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(){}

  login(){
    this.formSubmited = true;

    if(this.loginForm.invalid){
      return
    }
    console.log(this.loginForm.value);
  }
}
