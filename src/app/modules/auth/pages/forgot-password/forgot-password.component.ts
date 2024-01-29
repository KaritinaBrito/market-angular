import { Component } from '@angular/core';
import { ForgotPasswordFormComponent } from '../../components/forgot-password-form/forgot-password-form.component';
import { FooterComponent } from '../../../home/components/footer/footer.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ForgotPasswordFormComponent, FooterComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

}
