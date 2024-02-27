import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { GithubProjectsComponent } from './github-projects/github-projects.component';


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

}

