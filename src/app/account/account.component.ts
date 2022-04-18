import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
import { Repository } from '../repository'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  Accounts:Account[];
  user:User;

  addNewAccount(account){
    this.Accounts.push(account)

   constructor(accountService:AccountService, private http:HttpClient) { }

  ngOnInit(): void {
  }

}
