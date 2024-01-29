import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';
import { Subscription } from 'rxjs';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { NotFoundComponent } from '../../../../pages/not-found/not-found.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, TitleCasePipe, NotFoundComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy{
  private productsService = inject(ProductService);

  product: Product[] = [];
  productSub: Subscription | undefined;

  constructor(){}

  ngOnInit(): void {
    this.productSub = this.productsService.getProduct()
    .subscribe({
      next: (product: Product[]) =>{
        this.product = product;
        console.log(this.product);
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
}
