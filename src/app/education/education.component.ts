import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

interface EducationItem {
  date: string;
  title: string;
  description: string[];
  accentColor: string;
  delay: number;
}


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit{

  educationData: EducationItem[] = [
    {
      date: "2022 - Present",
      title: "Indian Institute of Engineering Science & Technology, Shibpur",
      description: [
        "Bachelor of Technology in Computer Science and Technology",
        "CGPA: 9.07 (Till 3rd Semester)",
      ],
      accentColor: "#41516C",
      delay: 100,
    },
    {
      date: "2020 - 2021",
      title: "Higher Secondary Examination",
      description: [
        "Board: West Bengal Council of Higher Secondary Education",
        "Percentage: 92.2%",
      ],
      accentColor: "red",
      delay: 200,
    },
    {
      date: "2018 - 2019",
      title: "Secondary Examination",
      description: [
        "Board: West Bengal Board of Secondary Education",
        "Percentage: 93.42%",
      ],
      accentColor: "blue",
      delay: 300,
    },
  ];

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
