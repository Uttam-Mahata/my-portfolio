import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Added HttpClientModule import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added BrowserAnimationsModule import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from "primeng/menubar";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {CardModule} from "primeng/card";
import {ButtonDirective} from "primeng/button";
import { ProjectsComponent } from './projects/projects.component';
import {AccordionModule} from "primeng/accordion";
import { SkillsComponent } from './skills/skills.component';
import {ChipsModule} from "primeng/chips";
import {FormsModule} from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {AvatarModule} from "primeng/avatar";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Added HttpClientModule
    BrowserAnimationsModule, // Added BrowserAnimationsModule
    AppRoutingModule,
    MenubarModule,
    CardModule,
    ButtonDirective,
    AccordionModule,
    ChipsModule,
    FormsModule,
    AvatarModule,


  ],
  providers: [
   // Provided GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
