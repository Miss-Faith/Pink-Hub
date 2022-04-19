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
  // userData: User;
  // myData: {};
  // userRepoData: User[];
  // searchterm: string = '';

  searchInfo = new Search('');
  @Output() getName = new EventEmitter<Search>();

  getUser(data){
    this.getName.emit(data.value.find);
    console.log(data.value.find)
    data.reset();
}

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void { }

}
