import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { FavoritesService } from '../../../core/services/favorites.service';
import { Product } from '../../../core/models/core/models/product.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  loading = signal(true);
  currentImageIndex = signal(0);

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    public favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.productsService.getProductById(id).subscribe({
        next: (res) => {
          this.product = res;
          this.loading.set(false);
          this.currentImageIndex.set(0);
        },
        error: () => this.loading.set(false)
      });
    }
  }

  prevImage() {
    if (!this.product) return;
    const len = this.product.images?.length || 1;
    this.currentImageIndex.update(i => (i - 1 + len) % len);
  }

  nextImage() {
    if (!this.product) return;
    const len = this.product.images?.length || 1;
    this.currentImageIndex.update(i => (i + 1) % len);
  }
}
