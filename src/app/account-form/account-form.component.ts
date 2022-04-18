import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account-service/account.service';
import {Search} from '../search';


@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {
  userData: User;
  myData: {};
  userRepoData: User[];
  searchterm: string = '';

  searchInfo = new Search('');
  @Output() getName = new EventEmitter<Search>();

  getUserData(){
    this.accountService.getUserData(this.searchterm).then((data) => {
      this.userData = data;
      this.router.navigate(['/searchUser', this.userData.login]);
    });
}

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void { }

}
