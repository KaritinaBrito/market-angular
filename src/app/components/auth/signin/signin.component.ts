import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginFormComponent } from '../../login-form/login-form.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ LoginFormComponent ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

}
