import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FavoritesService } from '../../../core/services/favorites.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <nav class="header-nav">
  <div class="logo">
     <!-- Logo image -->
      <a routerLink="/catalog">Product Explorer</a>
  </div>

 <!-- Hamburger button for mobile -->
  <button class="hamburger" (click)="toggleMenu()" aria-label="Toggle menu">
    &#9776;
  </button>

  <ul class="nav-links" [class.open]="menuOpen">
    <li><a routerLink="/catalog" (click)="closeMenu()">Catalog</a></li>
    <li>
      <a routerLink="/favorites" (click)="closeMenu()">
        Favorites <span class="badge">{{ favoritesCount() }}</span>
      </a>
    </li>
    <li *ngIf="isAdmin()" (click)="closeMenu()"><a routerLink="/admin">Admin</a></li>
  </ul>
</nav>

  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // simulate admin flag (same as AdminGuard)
  isAdmin = signal(true);
  menuOpen!: boolean;

  constructor(public favoritesService: FavoritesService) {}

  favoritesCount = computed(() => this.favoritesService.getFavoritesCount());
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
