import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Added HttpClientModule import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added BrowserAnimationsModule import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {NgOptimizedImage} from "@angular/common";
import { EducationComponent } from './education/education.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    EducationComponent,
    ServicesComponent,
    SkillsComponent,
    ProjectsComponent,
    VerticalNavComponent,
    ContactComponent,

  ],
    imports: [
        BrowserModule,
        HttpClientModule, // Added HttpClientModule
        BrowserAnimationsModule, // Added BrowserAnimationsModule
        AppRoutingModule,
        NgOptimizedImage,

    ],
  providers: [
   // Provided GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
