import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { Repository } from '../repository'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  addNewAccount(account){
    this.Accounts.push(account)

   constructor() { }

  ngOnInit(): void {
  }

}
