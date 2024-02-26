import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';

@Component({
  selector: 'app-github-projects',
  templateUrl: './github-projects.component.html',
  styleUrls: ['./github-projects.component.css'] // Corrected from styleUrl to styleUrls
})
export class GithubProjectsComponent implements OnInit { // Implement OnInit
  projects: any[];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.githubService.fetchGitHubProjects()
      .subscribe(
        data => {
          this.projects = data;
        },
        error => {
          console.error('Error fetching GitHub projects:', error);
        }
      );
  }
}
