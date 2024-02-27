import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isMobileView = false;
  isNavbarCollapsed = true;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .pipe(map(result => result.matches))
      .subscribe(isMobile => {
        this.isMobileView = isMobile;
        if (this.isMobileView) {
          this.isNavbarCollapsed = true;
        }
      });
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
