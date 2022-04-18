import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';
import { AccountService } from '../account-service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts:Account[];
  user:User;


  constructor(accountService:AccountService, private http:HttpClient) { }
    this.accounts = accountService.getAccounts();

  ngOnInit() {
    interface ApiResponse{
      user:string;
      repo:string;
  }

}
