import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMobileView: boolean = false;
  isNavbarCollapsed: boolean = true;

  constructor() {
    this.checkIsMobileView();
    window.addEventListener('resize', () => {
      this.checkIsMobileView();
    });
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  private checkIsMobileView() {
    this.isMobileView = window.innerWidth < 992; // Bootstrap lg breakpoint
  }


}
