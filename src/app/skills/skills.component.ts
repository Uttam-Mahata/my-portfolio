import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular' },
    { name: 'Spring Boot' },
    { name: 'Python' },
    { name: 'Machine Learning' },
    { name: 'Docker' }
  ];
  

}
