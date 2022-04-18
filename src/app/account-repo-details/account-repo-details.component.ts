import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account-service/account.service';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';

@Component({
  selector: 'app-account-repo-details',
  templateUrl: './account-repo-details.component.html',
  styleUrls: ['./account-repo-details.component.css']
})
export class AccountRepoDetailsComponent implements OnInit {

  searchTerm: string = '';
  repoData: Repo[];
  arrayData: any;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  getUserData() {

    this.accountService.getRepoData(this.searchTerm).then((data) => {
      this.arrayData = Object.entries(data);
      let repositoryData = this.arrayData[2];

      let convertRepositoryData =
        repositoryData[Object.keys(repositoryData)[1]];

      this.repoData = convertRepositoryData;
    });
    this.searchTerm = '';
  }
}
