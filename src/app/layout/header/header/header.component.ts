import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FavoritesService } from '../../../core/services/favorites.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<nav class="header-nav">
  <div class="logo">
    <a routerLink="/catalog">Store-Front.</a>
  </div>

  <button class="hamburger" (click)="toggleMenu()" aria-label="Toggle menu">
    &#9776;
  </button>

  <ul class="nav-links" [class.open]="menuOpen()">
    <li>
      <a routerLink="/catalog" (click)="closeMenu()">Catalog</a>
    </li>

    <li>
      <a routerLink="/favorites" (click)="closeMenu()">
        Favorites <span class="badge">{{ favoritesCount() }}</span>
      </a>
    </li>

    <li>
      <a routerLink="/cart" (click)="closeMenu()">
        Cart <span class="badge">{{ cartCount() }}</span>
      </a>
    </li>

    <li *ngIf="isAdmin()" (click)="closeMenu()">
      <a routerLink="/admin">Admin</a>
    </li>
  </ul>
</nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isAdmin = signal(true);
  menuOpen = signal(false);

  // Favorites reactive count
  favoritesCount = computed(() =>
    this.favoritesService.favorites$().length
  );

  // Cart reactive count
  cartCount = computed(() =>
    this.cartService.totalItems()
  );

  constructor(
    public favoritesService: FavoritesService,
    public cartService: CartService
  ) {}

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
