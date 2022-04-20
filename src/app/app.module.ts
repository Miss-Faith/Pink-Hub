import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AccountService } from './account-service/account.service';
import { AccountUserDetailsComponent } from './account-user-details/account-user-details.component';
import { AccountRepoDetailsComponent } from './account-repo-details/account-repo-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChangecolorDirective } from './changecolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountUserDetailsComponent,
    AccountRepoDetailsComponent,
    NavbarComponent,
    ChangecolorDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
