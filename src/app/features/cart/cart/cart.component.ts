import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<div class="cart-container">
  <h2>Your Cart</h2>

  <div *ngIf="cartService.cart().length === 0" class="empty-cart">
    <p>Your cart is empty.</p>
    <a routerLink="/catalog" class="btn btn-success">Go to Catalog</a>
  </div>

  <div *ngFor="let item of cartService.cart()" class="cart-item">
    <div class="item-details">
      <h4>{{ item.product.title }}</h4>
      <p class="text-muted">R {{ item.product.price | number:'1.2-2' }}</p>
    </div>

    <div class="item-quantity">
      <button class="btn btn-sm btn-outline-secondary"
              (click)="updateQuantity(item.product.id, item.quantity - 1)">−</button>
      <span class="mx-2">{{ item.quantity }}</span>
      <button class="btn btn-sm btn-outline-secondary"
              (click)="updateQuantity(item.product.id, item.quantity + 1)">+</button>
    </div>

    <button class="btn btn-sm btn-danger" (click)="remove(item.product.id)">Remove</button>
  </div>

  <div *ngIf="cartService.cart().length > 0" class="cart-summary">
    <h3>Total: R {{ cartService.totalPrice() | number:'1.2-2' }}</h3>
    <button class="btn btn-outline-danger" (click)="clear()">Clear Cart</button>
    <button class="btn btn-success ms-2">Proceed to Checkout</button>
  </div>
</div>
  `,
  styles: [`

    .cart-container {
      max-width: 60%;
      margin: 0 auto;
      padding: 2rem 1rem;
      width: 100%;
    }

    /* Page title */
    .cart-container h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: #08732F;
      font-weight: 700;
    }

    /* Empty cart state */
    .empty-cart {
      text-align: center;
      padding: 3rem;
      background: #f8f9fa;
      border-radius: 8px;
      margin-top: 2rem;
    }

    .empty-cart p {
      margin-bottom: 1.5rem;
      color: #666;
    }

    /* Cart items */
    .cart-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid #eee;
      gap: 1rem;
      background: #fff;
      border-radius: 8px;
      margin-bottom: 1rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      transition: box-shadow 0.2s;
    }

    .cart-item:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .item-details {
      flex: 1;
      min-width: 200px;
    }

    .item-details h4 {
      margin: 0 0 0.25rem 0;
      font-size: 1.1rem;
      color: #333;
    }

    .item-quantity {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .item-quantity .btn {
      width: 32px;
      height: 32px;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      line-height: 1;
    }

    /* Cart summary */
    .cart-summary {
      margin-top: 2rem;
      padding-top: 1.5rem;
      padding: 1.5rem;
      border-top: 2px solid #08732F;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
      background: #f8f9fa;
      border-radius: 8px;
    }

    .cart-summary h3 {
      margin: 0;
      font-size: 1.5rem;
      color: #08732F;
      font-weight: 700;
    }

    .cart-summary .btn {
      min-width: 140px;
    }


    @media (max-width: 992px) {
      .cart-container {
        max-width: 80%;
      }
    }

    @media (max-width: 768px) {
      .cart-container {
        max-width: 95%; 
        padding: 1rem;
      }

      .cart-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      .item-quantity {
        width: 100%;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }

      .cart-summary {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
      }

      .cart-summary .btn {
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .cart-container {
        max-width: 100%;
      }

      .cart-container h2 {
        font-size: 1.5rem;
      }

      .item-details h4 {
        font-size: 1rem;
      }
    }
  `]
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  remove(id: number) {
    this.cartService.removeFromCart(id);
  }

  updateQuantity(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity);
  }

  clear() {
    this.cartService.clearCart();
  }
}
