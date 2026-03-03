import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { FavoritesService } from '../../../core/services/favorites.service';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/models/core/models/product.model';

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
  quantity = signal(1);

  // ✅ Toast state
  showToast = signal(false);
  toastMessage = signal('');
  private toastTimeout: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    public favoritesService: FavoritesService,
    private cartService: CartService
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

  // ✅ Quantity controls
  increment() { this.quantity.update(q => q + 1); }
  decrement() {
    this.quantity.update(q => q > 1 ? q - 1 : q);
  }

  // ✅ Show toast and add to cart
  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity());

      // ✅ Show toast
      this.toastMessage.set(`${this.quantity()} x "${this.product.title}" added to cart!`);
      this.showToast.set(true);

      // ✅ Clear any existing timeout
      if (this.toastTimeout) {
        clearTimeout(this.toastTimeout);
      }

      // ✅ Auto-hide after 3 seconds
      this.toastTimeout = setTimeout(() => {
        this.showToast.set(false);
      }, 5000);

      this.quantity.set(1);
    }
  }

  // ✅ Manual close
  closeToast() {
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
    this.showToast.set(false);
  }

  // ✅ Cleanup on destroy
  ngOnDestroy() {
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
  }

  // Gallery controls
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
