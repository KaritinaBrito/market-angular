import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.css'
})
export class ForgotPasswordFormComponent {
  private fb = inject(FormBuilder);

  forgotForm: any = this.fb.group({
    mail: ['', [Validators.required, Validators.email]]
  })

  validateUser(){}
}
