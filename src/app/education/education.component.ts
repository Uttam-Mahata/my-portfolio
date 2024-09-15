import { Component } from '@angular/core';

interface EducationItem {
  institution?: string;
  duration?: string;
  degree?: string;
  grade?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  educationEvents: EducationItem[];

  constructor() {
    this.educationEvents = [
      {
        institution: 'IIEST, Shibpur',
        duration: 'Nov 2022 - 2026',
        degree: 'Bachelor of Technology - BTech, Computer Science and Technology',
        grade: 'CGPA: 9.07 (Till 4th Semester)',
        icon: 'pi pi-graduation-cap',
        color: '#673AB7',
        image: 'iiest-logo.png',
      },
      {
        institution: 'Bandhgora Anchal Vidyalaya (H.S)',
        duration: 'WBCHSE, 2020 - 2021',
        degree: 'Higher Secondary Examination',
        grade: 'Grade: 92.20%',
        icon: 'pi pi-book',
        color: '#FF9800',
      },
      {
        institution: 'Bandhgora Anchal Vidyalaya (H.S)',
        duration: 'WBBSE, 2018 - 2019',
        degree: 'Secondary Examination',
        grade: 'Grade: 93.42%',
        icon: 'pi pi-book',
        color: '#9C27B0',
      },
     
    ];
  }
}
