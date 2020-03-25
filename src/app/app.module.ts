import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { IconicTextboxComponent } from './webcomps/iconic-textbox/iconic-textbox.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SlickSliderComponent } from './webcomps/slick-slider/slick-slider.component';
import { FaraparSlickSliderComponent } from './webcomps/farapar-slick-slider/farapar-slick-slider.component';
import { FaraparFooterComponent } from './farapar-footer/farapar-footer.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    IconicTextboxComponent,
    TopBarComponent,
    SlickSliderComponent,
    FaraparSlickSliderComponent,
    FaraparFooterComponent,
    FooterComponent,
    TopbarComponent
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
