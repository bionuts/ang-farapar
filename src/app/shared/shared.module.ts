import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalListComponent } from './vertical-list/vertical-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { FeaturedInputComponent } from './featured-input/featured-input.component';
import { TableViewComponent } from './table-view/table-view.component';



@NgModule({
  declarations: [
    VerticalListComponent,
    FeaturedInputComponent,
    TableViewComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    VerticalListComponent,
    FeaturedInputComponent,
    TableViewComponent]
})
export class SharedModule { }
