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
import {InFlightsComponent} from './ticketing_comps/in-flights/in-flights.component';
import {OutFlightsComponent} from './ticketing_comps/out-flights/out-flights.component';
import {HotelReservationsComponent} from './ticketing_comps/hotel-reservations/hotel-reservations.component';
import {TrainTripsComponent} from './ticketing_comps/train-trips/train-trips.component';


const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      {path: '', component: InFlightsComponent},
      {path: 'inflights', component: InFlightsComponent},
      {path: 'outflights', component: OutFlightsComponent},
      {path: 'hotels', component: HotelReservationsComponent},
      {path: 'trains', component: TrainTripsComponent}
    ]
  },
  {
    path: 'profile', component: ProfileComponent, children: [
      {path: '', component: UserAccountComponent},
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
