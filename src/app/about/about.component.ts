import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  constructor() { }

  toggleNavbar() {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
  }

  typedText: string = "Data Science, Machine Learning and Web Development Enthusiast";
  typingDelay: number = 100; // Delay between each character typing
  typingSpeed: number = 50; // Speed of typing


  ngAfterViewInit(): void {
    this.typeText();
  }

  typeText(): void {
    let index = 0;
    const text = this.typedText;
    const typedTextElement = document.getElementById("typed-text");
    if (typedTextElement) {
      typedTextElement.innerHTML = ""; // Clear existing text
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          typedTextElement.innerHTML += text.charAt(index);
          index++;
        } else {
          clearInterval(typeInterval); // Stop typing when the entire text is displayed
        }
      }, this.typingSpeed);
    }
  }

}
