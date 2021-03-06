import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile_panel/profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UserScoreComponent } from './profile_panel/user-score/user-score.component';
import { UserOrdersComponent } from './profile_panel/user-orders/user-orders.component';
import { UserAccountComponent } from './profile_panel/user-account/user-account.component';
import { UserTransComponent } from './profile_panel/user-trans/user-trans.component';
import { UserPlistComponent } from './profile_panel/user-plist/user-plist.component';
import { UserBalanceComponent } from './profile_panel/user-balance/user-balance.component';
import { TicketingComponent } from './ticketing_panel/ticketing/ticketing.component';
import { TourspadComponent } from './homepage/tourspad/tourspad.component';
import { SecJobComponent } from './homepage/sec-job/sec-job.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InFlightsComponent } from './ticketing_panel/in-flights/in-flights.component';
import { OutFlightsComponent } from './ticketing_panel/out-flights/out-flights.component';
import { HotelReservationsComponent } from './ticketing_panel/hotel-reservations/hotel-reservations.component';
import { TrainTripsComponent } from './ticketing_panel/train-trips/train-trips.component';
import { FlightConsoleComponent } from './flight-console/flight-console.component';
import { SharedModule } from './shared/shared.module';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FooterComponent,
    TopbarComponent,
    UserScoreComponent,
    UserOrdersComponent,
    UserAccountComponent,
    UserTransComponent,
    UserPlistComponent,
    UserBalanceComponent,
    TicketingComponent,
    TourspadComponent,
    SecJobComponent,
    MainPageComponent,
    InFlightsComponent,
    OutFlightsComponent,
    HotelReservationsComponent,
    TrainTripsComponent,
    FlightConsoleComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
