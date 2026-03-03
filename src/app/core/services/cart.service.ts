import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../models/core/models/cart-item.model';
import { Product } from '../models/core/models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _cart = signal<CartItem[]>([]);
  cart = this._cart.asReadonly();

  totalItems = computed(() =>
    this._cart().reduce((sum, item) => sum + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this._cart().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );

  // ✅ Updated: Accept optional quantity (defaults to 1)
  addToCart(product: Product, quantity: number = 1) {
    const current = this._cart();
    const existing = current.find(item => item.product.id === product.id);

    if (existing) {
      this._cart.update(items =>
        items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      this._cart.update(items => [
        ...items,
        { product, quantity }
      ]);
    }
  }

  removeFromCart(productId: number) {
    this._cart.update(items =>
      items.filter(item => item.product.id !== productId)
    );
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this._cart.update(items =>
      items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }

  clearCart() {
    this._cart.set([]);
  }
}
