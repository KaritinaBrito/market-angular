import { Component } from '@angular/core';
import { RecoveryPasswordFormComponent } from '../../recovery-password-form/recovery-password-form.component';

@Component({
  selector: 'app-recovery-password',
  standalone: true,
  imports: [RecoveryPasswordFormComponent],
  templateUrl: './recovery-password.component.html',
  styleUrl: './recovery-password.component.css'
})
export class RecoveryPasswordComponent {

}
