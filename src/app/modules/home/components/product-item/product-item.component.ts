import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { PercentPipe } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [PercentPipe, RouterLinkWithHref],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{
  @Input({required: true}) product: Product | undefined;
  @Output() addToCart = new EventEmitter();

  ngOnInit(): void {
    console.log(this.product);
  }

  addToCartHandler(){
    this.addToCart.emit(this.product);
  }

}

