import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../account-service/account.service';


@Component({
  selector: 'app-account-repo-details',
  templateUrl: './account-repo-details.component.html',
  styleUrls: ['./account-repo-details.component.css'],
})

export class AccountRepoDetailsComponent implements OnInit {
  @ViewChild('repoForm') searchRepoForm: NgForm;
  
  repo: any;
  searchText:string;
  
    constructor(public accountservice: AccountService ) { }

  ngOnInit() {}


  //search for github repositories
  searchGithubRepos() {
    this.searchText = this.searchRepoForm.value.value.search;
    this.accountservice.gitUserRepos(this.searchText).then(
      (response) => {
        this.repo = this.accountservice.getRepoDetails;
      },
      (error) => {
        console.log(error);
      }
    );
  }


}