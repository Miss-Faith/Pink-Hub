import { Injectable } from '@angular/core';
import { Accounts } from '../accountList';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  getAccount(){
    return Accounts
  }
  constructor() { }
}
