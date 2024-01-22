import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  private productsService = inject(ProductService);

  product: any;
  constructor(){}

  ngOnInit(): void {
    this.productsService.getProduct()
      .subscribe({
        next: (product: any) =>{
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
}
