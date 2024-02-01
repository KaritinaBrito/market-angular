import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';
import { Subscription } from 'rxjs';
import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { NotFoundComponent } from '../../../../pages/not-found/not-found.component';
import { HeaderComponent } from '../header/header.component';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, TitleCasePipe,HeaderComponent, NotFoundComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy{
  private productsService = inject(ProductService);
  private cartService = inject(CartService);

  productSignal = signal<Product[]>([]);
  productSub: Subscription | undefined;

  constructor(){}

  ngOnInit(): void {
    this.productSub = this.productsService.getProduct()
    .subscribe({
      next: (product: Product[]) =>{
        this.productSignal.set(product);
        console.log(this.productSignal);
      },
      error: ( err: any) => {
        console.error(err);
        },
        complete: () => {
          console.log('completed')
        }
      })
    }

    ngOnDestroy(): void {
      this.productSub?.unsubscribe();
    }

    addToCart(product: Product){
      this.cartService.addToCart(product)
    }
}
