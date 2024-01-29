import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { Product } from '../../../../models/product.model';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../../services/product.service';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { PaymentCardComponent } from '../payment-card/payment-card.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe, PaymentCardComponent, RouterLinkWithHref],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit, OnDestroy{
  private route = inject(ActivatedRoute);
  private productservice= inject(ProductService);

  slug: string | undefined;
  product: Product | undefined;
  productSub: Subscription | undefined;

  galery: Array<any> = [];
  renderGalery: Boolean = true;
  currentImg: string | undefined;
  constructor(){}

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['id']
    console.log(this.slug);

    this.productSub = this.productservice.getProduct()
      .subscribe({
        next: (products: Product[]) => {
          this.product = products.filter(p => p.slug === this.slug)[0];
          this.currentImg = this.product.imageUrl[0]
          console.log(this.product);
        },
        error: ( err: any) =>{
          console.log('Error: ', err)
        }
      })
  }
  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

  handleChangeImg(imgItem: string){
    this.currentImg  = imgItem;

  }
}
