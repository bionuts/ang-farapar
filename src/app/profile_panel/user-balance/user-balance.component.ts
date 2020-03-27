import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-user-balance',
  templateUrl: './user-balance.component.html',
  styleUrls: ['./user-balance.component.css']
})
export class UserBalanceComponent implements OnInit {

  constructor(private profileService: ProfileService) {
    this.profileService.selectedProfileMenuName = 'balance_style';
  }

  ngOnInit(): void {

  }

}
