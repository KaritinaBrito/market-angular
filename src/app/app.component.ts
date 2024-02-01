import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './modules/home/components/footer/footer.component';
import { HeaderComponent } from './modules/home/components/header/header.component';
import { HomeComponent } from './modules/home/pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, HomeComponent],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  private document = inject(DOCUMENT);
  title = 'market';
}
