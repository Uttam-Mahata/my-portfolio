import { Component, OnInit } from '@angular/core';
// import aos


import * as AOS from 'aos';

interface SkillItem {
  title: string;
  imgSrc: string;
  altText: string;
  delay: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit  {

  skillsData: SkillItem[] = [
    {
      title: "HTML 5",
      imgSrc: "https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png",
      altText: "HTML5",
      delay: 200,
    },
    {
      title: "CSS3",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg",
      altText: "CSS3",
      delay: 300,
    },
    {
      title: "JavaScript",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      altText: "JavaScript",
      delay: 400,
    },
    {
      title: "Node.js",
      imgSrc: "http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png",
      altText: "Node.js",
      delay: 500,
    },
    {
      title: "Git",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      altText: "Git",
      delay: 600,
    },
    {
      title: "Linux",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
      altText: "Linux",
      delay: 700,
    },
    {
      title: "C/C++",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      altText: "C++",
      delay: 800,
    },
    {
      title: "Java",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      altText: "Java",
      delay: 900,
    },
    {
      title: "Angular",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
      altText: "Angular",
      delay: 1000,
    },
    {
      title: "Python",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      altText: "Python",
      delay: 1100,
    },
  ];
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
