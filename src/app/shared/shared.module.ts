import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalListComponent } from './vertical-list/vertical-list.component';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [VerticalListComponent],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
  exports: [VerticalListComponent]
})
export class SharedModule { }
