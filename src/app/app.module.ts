import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Added HttpClientModule import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added BrowserAnimationsModule import

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Added HttpClientModule
    BrowserAnimationsModule, // Added BrowserAnimationsModule
   
  ],
  providers: [
   // Provided GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
