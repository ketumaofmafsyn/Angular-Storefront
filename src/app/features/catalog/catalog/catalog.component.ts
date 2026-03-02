import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../../core/models/core/models/product.model';
import { CatalogService } from '../catalog.service';
import { FavoritesService } from '../../../core/services/favorites.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products = signal<Product[]>([]);
  loading = signal(true);

  // Signals for search/filter
  searchTerm = signal('');
  selectedCategory = signal('');

  categories: string[] = [];

  constructor(private catalogService: CatalogService, public favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.catalogService.getProducts().subscribe({
      next: (res) => {
        this.products.set(res);
        this.categories = Array.from(new Set(res.map(p => p.category)));
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  // Computed filtered products
  get filteredProducts() {
    return computed(() => {
      let list = this.products();
      const term = this.searchTerm().toLowerCase();
      if (term) {
        list = list.filter(p => p.name.toLowerCase().includes(term));
      }
      if (this.selectedCategory()) {
        list = list.filter(p => p.category === this.selectedCategory());
      }
      return list;
    });
  }
}

