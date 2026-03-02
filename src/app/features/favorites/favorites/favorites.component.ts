import { Component, computed, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { FavoritesService } from '../../../core/services/favorites.service';


@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  loading = signal(true);


  favoriteProducts = computed(() => {
    const products = this.productsService.products();
    const favIds = this.favoritesService.favorites$();
    return products.filter(p => favIds.includes(p.id));
  });

  constructor(
    private productsService: ProductsService,
    public favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {

    this.productsService.fetchProducts();


   
    const checkLoaded = () => {
      if (this.productsService.products().length > 0 ||
          this.productsService.hasLoaded()) {
        this.loading.set(false);
      } else {
        setTimeout(checkLoaded, 100);
      }
    };
    checkLoaded();
  }
}
