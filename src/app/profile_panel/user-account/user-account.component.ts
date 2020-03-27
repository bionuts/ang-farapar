import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  constructor(
    public profileService: ProfileService
  ) {
    this.profileService.selectedProfileMenuName = 'account_style';
  }

  ngOnInit(): void {

  }

}
