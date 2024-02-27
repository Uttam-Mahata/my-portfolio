// Add necessary imports and routes
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { GithubProjectsComponent } from './github-projects/github-projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'education', component: EducationComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'github-projects', component: GithubProjectsComponent },
    {path: 'contact', component: ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

