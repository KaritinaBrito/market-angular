import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { FooterComponent } from '../../../home/components/footer/footer.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ LoginFormComponent, FooterComponent ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

}
