import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { IconicTextboxComponent } from './webcomps/iconic-textbox/iconic-textbox.component';
import { SlickSliderComponent } from './webcomps/slick-slider/slick-slider.component';
import { FaraparSlickSliderComponent } from './webcomps/farapar-slick-slider/farapar-slick-slider.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AccountComponent } from './profile_panel/account/account.component';
import { UserScoreComponent } from './profile_panel/user-score/user-score.component';
import { UserOrdersComponent } from './profile_panel/user-orders/user-orders.component';
import { UserAccountComponent } from './profile_panel/user-account/user-account.component';
import { UserTransComponent } from './profile_panel/user-trans/user-trans.component';
import { UserPlistComponent } from './profile_panel/user-plist/user-plist.component';
import { UserBalanceComponent } from './profile_panel/user-balance/user-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    IconicTextboxComponent,
    SlickSliderComponent,
    FaraparSlickSliderComponent,
    FooterComponent,
    TopbarComponent,
    AccountComponent,
    UserScoreComponent,
    UserOrdersComponent,
    UserAccountComponent,
    UserTransComponent,
    UserPlistComponent,
    UserBalanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
