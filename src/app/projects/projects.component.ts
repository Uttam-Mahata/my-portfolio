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
      libraries: 'Pandas, NumPy, scikit-learn, Matplotlib, NLTK'
    },
    {
      name: 'Winners Education - Frontend Development',
      description: 'Winners Education Website',
      details: 'Currently, I am actively contributing to the frontend development of the Winners Education website. Winners Education is a dynamic learning platform.',
      role: 'Frontend Developer',
      technologies: 'Angular, Primeng, TypeScript, HTML, CSS'
    }
    // Add more projects as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
