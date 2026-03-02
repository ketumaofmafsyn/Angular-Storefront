import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  // Simulate admin check
  private isAdmin = true; // Set false to test redirect

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isAdmin) {
      return true;
    } else {
      // Redirect to catalog if not admin
      this.router.navigate(['/catalog']);
      return false;
    }
  }
}
