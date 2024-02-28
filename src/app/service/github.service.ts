import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubProjectsComponent, Project } from '../github-projects/github-projects.component';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private githubApiUrl = 'https://api.github.com/users/Uttam-Mahata/repos';

  constructor(private http: HttpClient) { }

  fetchGitHubProjects(): Observable<any[]> {
    return this.http.get<Project[]>(this.githubApiUrl);
  }
}
