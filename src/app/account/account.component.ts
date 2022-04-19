import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { AccountService } from '../account-service/account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;
  repo: any;

  // userData: User;
  // myData: {};
  // userRepoData: User[];
  // searchTerm: string = '';

  constructor(private accountService: AccountService){}
  
  ngOnInit(): void {
    this.getUserDetails('Miss-Faith');
    this.getRepoDetails('Miss-Faith');
  }
  
  //user details
  getUserDetails(githubUsername: string) {
    this.accountService.githubUser(githubUsername).then(
      (response) => {
        this.user = this.accountService.getUserDetails;
      },
      (error) => {
        console.log(error);
      }
    ); 
  }


  //user repositories
  getRepoDetails(githubUsername: string) {
    this.accountService.gitUserRepos(githubUsername).then(
      (response) => {
        this.repo = this.accountService.getRepoDetails;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  }
