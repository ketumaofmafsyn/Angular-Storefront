import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { FavoritesService } from '../../../core/services/favorites.service';
import { Product } from '../../../core/models/core/models/product.model';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],

  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  searchTerm = signal('');
  selectedCategory = signal('');

  loading = computed(() => this.productsService.products().length === 0);

  categories = computed(() => {
    const prods = this.productsService.products();
    return Array.from(new Set(prods.map(p => p.category)));
  });

  filteredProducts = computed(() => {
    let list = this.productsService.products();
    const term = this.searchTerm().toLowerCase();
    if (term) list = list.filter(p => p.title.toLowerCase().includes(term));
    if (this.selectedCategory()) list = list.filter(p => p.category === this.selectedCategory());
    return list;
  });

  constructor(
    private productsService: ProductsService,
    public favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.productsService.fetchProducts();
  }

  toggleFavorite(productId: number) {
    this.favoritesService.toggleFavorite(productId);
  }

  isFavorite(productId: number) {
    return this.favoritesService.isFavorite(productId);
  }

  truncateDescription(desc: string, limit = 100) {
    return desc.length > limit ? desc.slice(0, limit) + '...' : desc;
  }
}
