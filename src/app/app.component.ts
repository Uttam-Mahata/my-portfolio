import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { GithubProjectsComponent } from './github-projects/github-projects.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
  constructor(private router: Router) { }
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
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyC9EhITuvCJ6RuSfLgvHL8VaMF2LF77XUU",
      authDomain: "uttamm-40a89.firebaseapp.com",
      projectId: "uttamm-40a89",
      storageBucket: "uttamm-40a89.appspot.com",
      messagingSenderId: "167532590221",
      appId: "1:167532590221:web:19254401d245e8f14b9ec4",
      measurementId: "G-EPYNNEB42R"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }

}

