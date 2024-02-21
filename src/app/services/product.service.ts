import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiServer } from '../apiServer';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient)
  private apiUrl = apiServer.SERVER_URL;

  constructor() { }


  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}`);
  }
}
