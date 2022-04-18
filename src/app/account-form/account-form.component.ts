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
  
  searchInfo = new Search('');
  @Output() getName = new EventEmitter<Search>();

  getUserData(){
    this.getName.emit(data.value.searchTerm);
    console.log(data.value.searchTerm)
    data.reset();
}

  constructor() { }

  ngOnInit(): void { }

}
