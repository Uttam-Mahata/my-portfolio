import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private githubApiUrl = 'https://api.github.com/users/Uttam-Mahata/repos';

  constructor(private http: HttpClient) { }

  fetchGitHubProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.githubApiUrl);
  }
}
