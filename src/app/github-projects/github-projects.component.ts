import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-github-projects',
  templateUrl: './github-projects.component.html',
  styleUrls: ['./github-projects.component.css'] // Corrected from styleUrl to styleUrls
})
export class GithubProjectsComponent implements OnInit { // Implement OnInit
  
  projects: Project[];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.githubService.fetchGitHubProjects()
      .subscribe(
        data => {
          this.projects = data.map(project => ({
            ...project,
            // Assuming the GitHub API provides the project name
            githubLink: `https://github.com/Uttam-Mahata/${project.name}`
          }));
        },
        error => {
          console.error('Error fetching GitHub projects:', error);
        }
      );
  }
}
// project.ts
export interface Project {
  name: string;
  description: string;
  details: string;
  githubLink: string;
}

