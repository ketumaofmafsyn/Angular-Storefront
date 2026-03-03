import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { Routes } from '@angular/router';

// Standalone components

export const appRoutes: Routes = [
  {
    path: 'catalog',
    loadComponent: () =>
      import('../app/features/catalog/catalog/catalog.component').then(
        (m) => m.CatalogComponent
      ),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('../app/features/product-details/product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent
      ),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('../app/features/favorites/favorites/favorites.component').then((m) => m.FavoritesComponent),
  },
  {
  path: 'cart',
  loadComponent: () =>
    import('../app/features/cart/cart/cart.component').then((m) => m.CartComponent),
},

   {
    path: 'admin',
    loadComponent: () =>
      import('../app/features/admin/admin/admin.component').then(m => m.AdminComponent),
    canActivate: [AdminGuard]
  },

  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: '**', redirectTo: 'catalog' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
