import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service/account.service';
import { Repo } from '../repo-class/repo';

@Component({
  selector: 'app-account-repo-details',
  templateUrl: './account-repo-details.component.html',
  styleUrls: ['./account-repo-details.component.css']
})
export class AccountRepoDetailsComponent implements OnInit {

  repo: Repo;
  public searchRepo: string;
  public resultCount = 12;

  searchRepos() {
    this.searchRepo = '';
    this.resultCount = 30;
    this.getDataFunction();

  }

    constructor(public gitRepoRequest: AccountService ) { }

  ngOnInit() {
    this.resultCount = 5;
    this.gitRepoRequest.gitRepos(this.searchRepo);
  }


  getDataFunction() {
    this.gitRepoRequest.gitRepos(this.searchRepo);
  }


}