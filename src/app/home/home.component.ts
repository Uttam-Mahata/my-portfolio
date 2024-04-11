import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  educationItems = [
    {
      title: 'Flowbite Application UI v2.0.0',
      latest: true,
      released: 'Released on January 13th, 2022',
      description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.'
    },
    {
      title: 'Flowbite Figma v1.3.0',
      latest: false,
      released: 'Released on December 7th, 2021',
      description: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.'
    },
    {
      title: 'Flowbite Library v1.2.2',
      latest: false,
      released: 'Released on December 2nd, 2021',
      description: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.'
    }
  ];

  constructor() { }

  ngAfterViewInit(): void {
    const options = {
      strings: ['I am a Web Developer', 'Machine Learning', 'Data Science Enthusiast'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };

    const typed = new Typed('.typing-effect', options);
  }

}
