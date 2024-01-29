import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { FooterComponent } from '../../../home/components/footer/footer.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RegisterFormComponent, FooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
