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

  user: User;
  repo: Repo;


    findUser(username) {
      this.githubUser = '';
      this.ngOnInit();
    }


  constructor(public accountService: AccountService) { }

  ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.userRepos.gitUserRepos(this.searchMe);
   
   //user details
   getUserDetails(githubUsername: string) {
    this.repositoryUserService.getUserResponse(githubUsername).then(
      (response) => {
        this.user = this.repositoryUserService.getUserDetails;
      },
      (error) => {
        console.log(error);
      }
    ); 
  }


  //user repositories
  getUserRepositories(githubUsername: string) {
    this.repositoryUserService.getRepositoryResponse(githubUsername).then(
      (response) => {
        this.repositories = this.repositoryUserService.getRepositoryDetails;
        console.log(this.repositories);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}