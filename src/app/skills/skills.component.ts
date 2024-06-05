import { Component, OnInit } from '@angular/core';
// import aos


import * as AOS from 'aos';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit  {

  skills = [
    {
      title: 'Frontend Development',
      description: 'I can build a beautiful and scalable SPA using HTML, CSS and JavaScript.',
      icon: 'fa-laptop-code'
    },
    {
      title: 'Backend Development',
      description: 'Handle database, server, api using Express, MongoDB and Node.js.',
      icon: 'fa-server'
    },
    {
      title: 'API Development',
      description: 'I can develop robust RESTful APIs using Node.js and Express.',
      icon: 'fa-network-wired'
    },
    {
      title: 'Competitive Coder',
      description: 'Adept in problem solving and able to participate in competitive coding competitions.',
      icon: 'fa-code'
    },
    {
      title: 'Machine Learning',
      description: 'Familiar with machine learning algorithms and able to develop models using Python.',
      icon: 'fa-robot'
    },
    {
      title: 'Data Science',
      description: 'Proficient in data analysis and data wrangling using Python.',
      icon: 'fa-chart-bar'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
