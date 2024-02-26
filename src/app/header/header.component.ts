import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMobileView: boolean = false;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobileView();
  }

  ngOnInit() {
    // Initial check on component initialization
    this.checkIfMobileView();
  }

  checkIfMobileView() {
    // Determine if the window width is less than a certain value (e.g., 768px for tablets)
    this.isMobileView = window.innerWidth < 768;
  }
}
