import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountUserDetailsComponent } from './account-user-details/account-user-details.component';
import { AccountRepoDetailsComponent } from './account-repo-details/account-repo-details.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'account-user-details', component: AccountUserDetailsComponent},
  { path: 'account-repo-details', component: AccountRepoDetailsComponent},
  { path: '', redirectTo:"/account", pathMatch:"full"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
