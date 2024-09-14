import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Added HttpClientModule import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added BrowserAnimationsModule import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    

  ],
    imports: [
        BrowserModule,
        HttpClientModule, // Added HttpClientModule
        BrowserAnimationsModule, // Added BrowserAnimationsModule
        AppRoutingModule,
        

    ],
  providers: [
   // Provided GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
