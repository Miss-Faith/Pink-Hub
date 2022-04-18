import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../account-service/account.service';
import { User } from '../user-class/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  userData: User;
  myData: {};
  userRepoData: User[];
  searchTerm: string = '';
  
  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit(): void { }

  getUserData() {
    this.accountService.getUserData(this.searchTerm).then((data) => {
      this.userData = data;
      this.router.navigate(['/searchUser', this.userData.login]);
    });
  }

}
