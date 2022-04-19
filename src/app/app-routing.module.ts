import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountUserDetailsComponent } from './account-user-details/account-user-details.component';
import { AccountRepoDetailsComponent } from './account-repo-details/account-repo-details.component';

const routes: Routes = [
  {path: 'users', component: AccountUserDetailsComponent},
    {path: 'repo', component: AccountRepoDetailsComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
