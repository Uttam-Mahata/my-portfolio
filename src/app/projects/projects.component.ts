import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [
    {
      name: 'Optimizing Document Clustering',
      description: 'Correlation Driven Cluster Formation',
      details: 'Optimizes document clustering using correlation-based clustering. Preprocesses text documents, applies clustering optimization, and compares the performance of various clustering algorithms.',
      dependency: 'Python3.x',
      libraries: 'Pandas, NumPy, scikit-learn, Matplotlib, NLTK',
      link: 'https://github.com/Uttam-Mahata/Optimizing-Document-Clustering-using-Correlation',
      workPeriod: 'Aug 2023 - Dec 2023'
    },
    {
      name: 'Winners Education - Frontend Development',
      description: 'Winners Education Website',
      details: 'Currently, I am actively contributing to the frontend development of the Winners Education website. Winners Education is a dynamic learning platform.',
      role: 'Frontend Developer',
      technologies: 'Angular, Primeng, TypeScript, HTML, CSS',
      link:'https://winners-v2.web.app/',
      workPeriod: 'July 2023 - Present'
    },
    {
      name: 'Question Answer Analysis using NLP',
      details: 'Working with question-answer analysis system using NLP. The system will analyze the question and answer according to reference answers for each student and provide grade for each question based on the similarity score between them.',
      dependency: 'Python3.x',
      libraries: 'Pandas, NumPy, scikit-learn, Matplotlib, NLTK',
      workPeriod: 'Jan 2024 - Present'
    }
    // Add more projects as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
