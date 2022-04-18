import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { AccountService } from '../account-service/account.service';
import { Router } from '@angular/router';


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

  constructor(private router: Router, private accountService: AccountService){}
  
  ngOnInit(): void {}
  
  }
