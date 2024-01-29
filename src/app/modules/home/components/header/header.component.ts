import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../../models/user.model';
import { MenuComponent } from '../menu/menu.component';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  private authService= inject(AuthService);
  private router= inject(Router);

  ngOnInit(): void {
    this.authService.getProfile()
    .subscribe(user => {
      this.user = user;
    })
  }

  user: User | null = null;
  isOpenOverlayAvatar = false;

  logout(){
    this.authService.logout();
    this.router.navigate(['/sign-in'])
  }

}
