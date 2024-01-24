import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RequestStatus } from '../../models/request-status.model';

@Component({
  selector: 'app-recovery-password-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './recovery-password-form.component.html',
  styleUrl: './recovery-password-form.component.css'
})
export class RecoveryPasswordFormComponent {
  private fb = inject(FormBuilder);

  formSubmited: RequestStatus = 'init';

  recoveryForm: any = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  validateUser(){}
}
