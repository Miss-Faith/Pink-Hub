import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tracing } from 'trace_events';
import { AccountService } from '../account-service/account.service';
import { Repo } from '../repo-class/repo';

@Component({
  selector: 'app-account-repo-details',
  templateUrl: './account-repo-details.component.html',
  styleUrls: ['./account-repo-details.component.css'],
  providers: [AccountService]
})
export class AccountRepoDetailsComponent implements OnInit {
  @ViewChild('f') searchForm!: NgForm;
  
  repo: any;
  searchText:string;
  reposUserService: any;

    constructor(public accountservice: AccountService ) { }

  ngOnInit() {}


  //search for github repositories
  searchGithubRepos() {
    this.searchText = this.searchForm.value.value.search;
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