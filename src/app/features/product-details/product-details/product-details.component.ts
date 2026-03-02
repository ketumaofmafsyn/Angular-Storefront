import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../../core/models/core/models/product.model';
import { CatalogService } from '../../catalog/catalog.service';
import { FavoritesService } from '../../../core/services/favorites.service';


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

  // Signal for current image index
  currentImageIndex = signal(0);

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService,  public favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.catalogService.getProductById(id).subscribe({
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
    const len = this.product.images.length;
    this.currentImageIndex.update(i => (i - 1 + len) % len);
  }

  nextImage() {
    if (!this.product) return;
    const len = this.product.images.length;
    this.currentImageIndex.update(i => (i + 1) % len);
  }
}
