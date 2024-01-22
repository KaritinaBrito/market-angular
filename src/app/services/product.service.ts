import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiServer } from '../apiServer';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient)
  private apiUrl = apiServer.serverUrl;

  constructor() { }


  getProduct(){
    return this.http.get(`${this.apiUrl}`);
  }
}
