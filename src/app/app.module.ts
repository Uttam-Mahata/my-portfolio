import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Added HttpClientModule import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added BrowserAnimationsModule import
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { GithubProjectsComponent } from './github-projects/github-projects.component';
import { GithubService } from './service/github.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    GithubProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Added HttpClientModule
    BrowserAnimationsModule, // Added BrowserAnimationsModule
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FontAwesomeModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    GithubService, // Provided GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
