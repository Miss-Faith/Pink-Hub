import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account-service/account.service';


@Component({
  selector: 'app-account-repo-details',
  templateUrl: './account-repo-details.component.html',
  styleUrls: ['./account-repo-details.component.css'],
})

export class AccountRepoDetailsComponent implements OnInit {
  @ViewChild('repoForm') searchForm: NgForm;
  
  repo: any;
  searchText:string;
  displayUserErrorMessage = false;
  displayRepoInformation = false;
  
    constructor(public accountservice: AccountService ) { }

  ngOnInit(): void {}


  //search for github repositories
  searchGithubRepos() {
    this.searchText = this.searchForm.value.search;
    this.accountservice.gitUserRepos(this.searchText).then(
      (response) => {
        this.repo = this.accountservice.getRepoDetails;
        this.displayRepoInformation = true;
      },
      (error) => {
        this.displayUserErrorMessage = true;
        console.log(error);
      }
    );
  }


}