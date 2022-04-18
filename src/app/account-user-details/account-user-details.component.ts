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
  userName: string = '';
  userNameLink: any;
  userData: User;
  repoData: Repo[];

  constructor(private router: ActivatedRoute, private accountService: AccountService) { }

  getUserData() {
    this.accountService.getUserData(this.userName).then((data) => {
      this.userData = data;
    });

    this.accountService.getUserRepoData(this.userName).then((data) => {
      this.repoData = data;
    });
  }

  ngOnInit() {
    this.userName = 'Faith';
    this.userNameLink = this.router.snapshot.paramMap.get('login');

    this.accountService.getUserData(this.userNameLink).then((data) => {
      this.userData = data;
    this.accountService.getUserRepoData(this.userNameLink).then((data) => {
      this.repoData = data;
      });
    });
  }
}