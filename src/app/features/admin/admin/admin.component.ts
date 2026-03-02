import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-4">
      <h2 class="fw-bold text-success mb-4">Admin Dashboard</h2>
      <p>Welcome, Admin! This page is protected by AdminGuard.</p>
      <ul>
        <li>Manage products</li>
        <li>View favorites statistics</li>
        <li>Configure settings</li>
      </ul>
    </div>
  `,
  styles: [
    `
      .container { max-width: 800px; margin: 0 auto; }
      h2 { font-size: 1.75rem; }
    `
  ]
})
export class AdminComponent {}
