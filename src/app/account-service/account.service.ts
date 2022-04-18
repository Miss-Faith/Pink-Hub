import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor(private http:HttpClient) { }

  getUserData(username: string) {
    return this.http
      .get<User>(
        //`https://api.github.com/users/${username}?access_token=${this.token}`
        `https://api.github.com/users/${username}`
      );
  }

  getUserRepoData(username: string) {
    return this.http
      .get<Repo[]>(
        ` https://api.github.com/users/${username}/repos?order=created&sort=asc?access_token=${this.token}`
      );
  }

  getRepoData(searchterm: string) {
    return this.http
      .get<Repo[]>(`https://api.github.com/search/repositories?q=${searchterm}`
      );
  }
}
