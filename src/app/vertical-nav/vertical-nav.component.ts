import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.css']
})
export class VerticalNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getAllMenus().forEach(this.openMenu.bind(this)); // Bind this to the openMenu function
  }

  // Get all menu from document
  getAllMenus(): NodeListOf<Element> {
    return document.querySelectorAll('.fabTrigger');
  }

  // Menu Open and Close function
  openMenu(active: Element): void {
    if (active.classList.contains('fabTrigger')) {
      active.addEventListener('click', (e) => { // Use arrow function to preserve this context
        e.preventDefault();

        if (active.parentElement.classList.contains('active')) {
          // Close the clicked dropdown
          active.parentElement.classList.remove('active');
        } else {
          // Close the opened dropdown
          this.closeMenu(); // Use this.closeMenu() to call the closeMenu function
          // add the open and active class(Opening the DropDown)
          active.parentElement.classList.add('active');
        }
      });
    }
  }

  // Close the opened Menu
  closeMenu(): void {
    // remove the open and active class from other opened Menu (Closing the opened Menu)
    document.querySelectorAll('.fab').forEach((container: Element) => { // Use arrow function to preserve this context
      container.classList.remove('active');
    });
  }

}
