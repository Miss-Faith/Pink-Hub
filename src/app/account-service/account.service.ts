import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  getUserDetails: User;
  getRepoDetails: Repo;
 
  constructor(private http:HttpClient) { 
    this.getUserDetails = new User('','',0,'','',new Date(),'','','','','');
    this.getRepoDetails = new Repo('','','','',0,'',new Date());
}
  githubUser(searchName: string) {
    interface ApiUserResponse {
      name: string;
      bio:string;
      user:string;
      url:string;
      html_url: string;
      public_repos: number;
      description: string;
      created_at: Date;
      login: string;
      location:string;
      followers: number;
      following: number;
      avatar_url: string;
    }

  let userPromise = new Promise<void>((resolve, reject) => {
    this.http.get<ApiUserResponse>('https://api.github.com/' + searchName + '/?access_token=' + environment.myApi).toPromise().then(response => {
      this.getUserDetails =response;
      resolve();
    },
    error => {
      reject(error);
      console.log(error);
    });
  });  
    return userPromise;
  }

  gitUserRepos(searchRepo: string) {
    interface ApiRepoResponse {
      name: string;
      html_url:string;
      description: string;
      created_at: Date;
      forks: any;
      watchers_count: number;
      language: any;
    }

  let repoPromise = new Promise<void>((resolve, reject) => {
    this.http.get<ApiRepoResponse>('https://api.github.com/users/' + searchRepo + '/repos?order=created&sort=asc?access_token=' + environment.myApi).toPromise().then(response => {
      this.getRepoDetails = response;
        resolve();
      }, error => {
        reject(error);
      });
    });
    return repoPromise;
  }


//   gitRepos(searchName) {
//     interface ApiResponse {
//       items: any;
//     }

//   const promise = new Promise<void>((resolve, reject) => {
//     this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + ' &per_page=10 ' + environment.myApi).toPromise().then(getRepoResponse => {
//       this.searchRepo = getRepoResponse.items;

//     resolve();
//     }, error => {
//       this.searchRepo = 'error';
//       reject(error);
//     });
//   });
//    return promise;
//   }
// }

// function githubUser(searchName: any) {
//   throw new Error('Function not implemented.');
// }


// function searchName(searchName: any) {
//   throw new Error('Function not implemented.');
// }


// function gitUserRepos(searchMe: any) {
//   throw new Error('Function not implemented.');
// }


// function searchRepo(searchMe: any) {
//   throw new Error('Function not implemented.');
// }


// function gitRepos(searchName: any) {
//   throw new Error('Function not implemented.');
// }
