import { Component, OnInit, ViewChild } from '@angular/core';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';
import { AccountService } from '../account-service/account.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-account-user-details',
  templateUrl: './account-user-details.component.html',
  styleUrls: ['./account-user-details.component.css']
})
export class AccountUserDetailsComponent implements OnInit {
  
  user: User;
  searchText!: string;
  repo: Repo;

  constructor(public accountService: AccountService) { }

  //accessing form inputs
  @ViewChild('f')
  searchForm: NgForm;

  ngOnInit() {}
  
   
   //user details
   searchGithubuser() {
    this.searchText = this.searchForm.value.search;
    this.accountService.githubUser(this.searchText).then(
      (response) => {
        this.user = this.accountService.getUserDetails;
      },
      (error) => {
        console.log(error);
      }
    ); 
  }
}

  // //user repositories
  // getRepoDetails() {
  //   this.accountService.gitUserRepos(this.searchText).then(
  //     (response) => {
  //       this.repo = this.accountService.getRepoDetails;
  //       console.log(this.repo);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
//   // }
// }