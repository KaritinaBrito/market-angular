import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterFormComponent } from '../../register-form/register-form.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RegisterFormComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
