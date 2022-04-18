import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  token: string = environment.accessToken;
  
  constructor(private http:HttpClient) { }

  getUserData(username: string) {
    return this.http
      .get<User>(
        `https://api.github.com/users/${username}`
      ).toPromise();
  }

  getUserRepoData(username: string) {
    return this.http
      .get<Repo[]>(
        ` https://api.github.com/users/${username}/repos?order=created&sort=asc?access_token=${this.token}`
      ).toPromise();
  }

  getRepoData(searchterm: string) {
    return this.http
      .get<Repo[]>(`https://api.github.com/search/repositories?q=${searchterm}`
      ).toPromise();
  }
}
