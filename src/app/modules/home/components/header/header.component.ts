import { Component,OnInit, inject, signal } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../../models/user.model';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  private authService= inject(AuthService);
  private cartService = inject(CartService);
  private router= inject(Router);

  menu = false;
  hideSideMenu = signal(true);
  user: User | null = null;
  isOpenOverlayAvatar = false;
  cart = this.cartService.cart;
  total = this.cartService.total;

  ngOnInit(): void {
    this.authService.getProfile()
    .subscribe(user => {
      this.user = user;
    });
  }

  menuIsOpen(){
    return this.menu = !this.menu;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/sign-in'])
  }

  toggleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
    if(this.menu){
      this.menu = false
    }
  }


}
