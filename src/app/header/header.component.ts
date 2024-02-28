import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isMobileView = false;
  isNavbarCollapsed = true;
  isAboutActive: boolean = true;
  isEducationActive: boolean = false;
  isSkillsActive: boolean = false;
  isProjectsActive: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the About route
        this.isAboutActive = event.urlAfterRedirects === '/';
        // Check if the current route is the Education route
        this.isEducationActive = event.urlAfterRedirects === '/education';
        // Check if the current route is the Skills route
        this.isSkillsActive = event.urlAfterRedirects === '/skills';
        // Check if the current route is the Projects route
        this.isProjectsActive = event.urlAfterRedirects === '/projects';


      }
    });
  }

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
