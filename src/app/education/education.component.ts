import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit{

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

  ngOnInit(): void {
    AOS.init();
  }

}
