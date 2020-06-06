import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VerticalListComponent} from './vertical-list/vertical-list.component';
import {AppRoutingModule} from '../app-routing.module';
import {FeaturedInputComponent} from './featured-input/featured-input.component';
import {TableViewComponent} from './table-view/table-view.component';
import {FeaturedModalComponent} from './featured-modal/featured-modal.component';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { StepsLoginComponent } from './steps-login/steps-login.component';


@NgModule({
  declarations: [
    VerticalListComponent,
    FeaturedInputComponent,
    TableViewComponent,
    FeaturedModalComponent,
    PhoneInputComponent,
    StepsLoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    VerticalListComponent,
    FeaturedInputComponent,
    FeaturedModalComponent,
    TableViewComponent]
})
export class SharedModule {
}
