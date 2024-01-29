import { Component } from '@angular/core';
import { RecoveryPasswordFormComponent } from '../../components/recovery-password-form/recovery-password-form.component';
import { FooterComponent } from '../../../home/components/footer/footer.component';

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [RecoveryPasswordFormComponent, FooterComponent],
  templateUrl: './recovery-password.component.html',
  styleUrl: './recovery-password.component.css'
})
export class RecoveryPasswordComponent {

}
