import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
import { Repo } from '../repo-class/repo';
import { AccountService } from '../account-service/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userName: string = '';
  isError: boolean = false;
  userNameLink: any;
  userData: Users;
  showUserDetails: boolean = false;
  repoData: Repo[];

  constructor(private router: ActivatedRoute, private accountService: AccountService){}
  

  ngOnInit() {
    interface ApiResponse{
      user:string;
      repo:string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.account = new Account(data.user, data.repo)
    })  
  
  }

}
