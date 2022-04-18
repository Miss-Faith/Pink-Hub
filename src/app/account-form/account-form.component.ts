import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {
  
  // newAccount = new Account("","");
  // @Output() addAccount = new EventEmitter<Account>();
  
  //   submitGoal(){
  // this.addGoal.emit(this.newAccount);
  //   }

  constructor() { }

  ngOnInit(): void {
  }

}
