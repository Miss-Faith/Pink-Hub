import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';
import { AccountService } from '../account-service/account.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userData: User;
  myData: {};
  userRepoData: User[];
  searchTerm: string = '';

  constructor(private router: ActivatedRoute, private accountService: AccountService){}
  
  ngOnInit(): void {}
  
  getUserData() {
    this.accountService.getUserData(this.searchTerm).then((data) => {
      this.userData = data;
      this.router.navigate(['/searchUser', this.userData.login]);
    });
  }
}
