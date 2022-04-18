import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Search} from '../search';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {
  
  searchInfo = new Search('');
  @Output() getName = new EventEmitter<Search>();

  getUserData(){
    this.getName.emit(data.value.searchterm);
    console.log(data.value.searchterm)
    data.reset();
}

  constructor() { }

  ngOnInit(): void { }

}
