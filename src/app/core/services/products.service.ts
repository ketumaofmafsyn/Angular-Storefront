import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/core/models/product.model';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  products = signal<Product[]>([]);

  // ✅ Tracking signal for fetch completion
  private hasLoadedSignal = signal(false);
  hasLoaded = this.hasLoadedSignal.asReadonly();

  constructor(private http: HttpClient) {}

  fetchProducts() {
    this.http.get<Product[]>('https://fakestoreapi.com/products')
      .subscribe({
        next: (data) => {
          const productsWithGallery = data.map(p => ({
            ...p,
            images: [
              p.image,
              p.image.replace('.jpg', '_1.jpg'),
              p.image.replace('.jpg', '_2.jpg'),
              p.image.replace('.jpg', '_3.jpg'),
              p.image.replace('.jpg', '_4.jpg'),
              p.image.replace('.jpg', '_5.jpg')
            ]
          }));
          this.products.set(productsWithGallery);
          this.hasLoadedSignal.set(true);
        },
        error: (err) => {
          console.error('Failed to fetch products', err);
          this.hasLoadedSignal.set(true);
        }
      });
  }

  getProductById(id: number) {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`).pipe(
      map(p => ({
        ...p,
        images: [
          p.image,
          p.image.replace('.jpg', '_1.jpg'),
          p.image.replace('.jpg', '_2.jpg'),
          p.image.replace('.jpg', '_3.jpg'),
          p.image.replace('.jpg', '_4.jpg'),
          p.image.replace('.jpg', '_5.jpg')
        ]
      }))
    );
  }
}
