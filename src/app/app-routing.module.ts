import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {UserAccountComponent} from './profile_panel/user-account/user-account.component';
import {UserScoreComponent} from './profile_panel/user-score/user-score.component';
import {UserOrdersComponent} from './profile_panel/user-orders/user-orders.component';
import {UserTransComponent} from './profile_panel/user-trans/user-trans.component';
import {UserPlistComponent} from './profile_panel/user-plist/user-plist.component';
import {UserBalanceComponent} from './profile_panel/user-balance/user-balance.component';
import {MainPageComponent} from './main-page/main-page.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {
    path: 'profile', component: ProfileComponent, children: [
      {path: '', redirectTo: 'account', pathMatch: 'full'},
      {path: 'account', component: UserAccountComponent},
      {path: 'scores', component: UserScoreComponent},
      {path: 'orders', component: UserOrdersComponent},
      {path: 'trans', component: UserTransComponent},
      {path: 'plist', component: UserPlistComponent},
      {path: 'balance', component: UserBalanceComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
