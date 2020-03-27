import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  constructor(private profileService: ProfileService) {
    this.profileService.selectedProfileMenuName = 'orders_style';
  }

  ngOnInit(): void {
  }

}
