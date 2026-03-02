import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../../core/models/core/models/product.model';
import { MOCK_PRODUCTS } from '../features/catalog/mock-products';



@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private products: Product[] = MOCK_PRODUCTS;

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(500));
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id)).pipe(delay(300));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(this.products.filter(p => p.category === category)).pipe(delay(300));
  }
}
