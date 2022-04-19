import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';
import { AccountService } from '../account-service/account.service';
@Component({
  selector: 'app-account-user-details',
  templateUrl: './account-user-details.component.html',
  styleUrls: ['./account-user-details.component.css']
})
export class AccountUserDetailsComponent implements OnInit {
  public searchMe = 'Miss-Faith';
    public githubUser: string;

    users: User ;
    repo: Repo;
    public searchRepo: string;
    public resultCount = 12;
  githubUserRequest: any;
  userRepos: any;


    findUser(username) {
        this.githubUser = '';
        this.searchMe  = username;
        this.ngOnInit();
    }


  constructor() { }

  ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
  }


  searchRepos() {
    this.searchRepo = '';
    this.resultCount = 10;
  }
}