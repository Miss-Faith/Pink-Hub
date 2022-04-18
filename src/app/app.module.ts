import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AccountService } from './account-service/account.service';
import { AccountUserDetailsComponent } from './account-user-details/account-user-details.component';
import { AccountRepoDetailsComponent } from './account-repo-details/account-repo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountFormComponent,
    AccountUserDetailsComponent,
    AccountRepoDetailsComponent
    
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
