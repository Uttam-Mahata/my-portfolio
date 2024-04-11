import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Use styleUrls instead of styleUrl
})
export class HeaderComponent {
  isMobileMenuOpen = false; // Property to track the state of the mobile menu

  constructor(private router: Router) {}

  openMobileMenu(): void {
    this.isMobileMenuOpen = true; // Function to open the mobile menu
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false; // Function to close the mobile menu
  }

  closeMobileMenuAndNavigate(link: string): void {
    this.closeMobileMenu();
    this.router.navigateByUrl(link);
  }
}