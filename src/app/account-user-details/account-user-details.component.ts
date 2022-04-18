import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account-service/account.service';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';

@Component({
  selector: 'app-account-user-details',
  templateUrl: './account-user-details.component.html',
  styleUrls: ['./account-user-details.component.css']
})
export class AccountUserDetailsComponent implements OnInit {
  public searchMe = 'Miss-Faith';
  public githubUser: string;

  users: User ;
    repository: Repository;
    public searchRepo: string;
    public resultCount = 12;


  findUser(username) {
    this.githubUser = '';
    this.searchMe  = username;
    this.ngOnInit();
  }

  constructor(private router: ActivatedRoute, private accountService: AccountService) { }

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