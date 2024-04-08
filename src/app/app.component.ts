import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
  constructor(private router: Router, private primengConfig: PrimeNGConfig) { }
  navigateToAbout() {
    this.router.navigate(['about']);
  }
  navigateToEducation() {
    this.router.navigate(['education']);
  }
  navigateToFooter() {
    this.router.navigate(['footer']);
  }
  navigateToHeader() {
    this.router.navigate(['header']);
  }
  navigateToProjects() {
    this.router.navigate(['projects']);
  }
  navigateToSkills() {
    this.router.navigate(['skills']);
  }
  navigateToGithubProjects() {
    this.router.navigate(['github-projects']);
  }

 

}

