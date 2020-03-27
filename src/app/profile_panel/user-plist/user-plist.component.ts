import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-user-plist',
  templateUrl: './user-plist.component.html',
  styleUrls: ['./user-plist.component.css']
})
export class UserPlistComponent implements OnInit {

  constructor(private profileService: ProfileService) {
    this.profileService.selectedProfileMenuName = 'plist_style';
  }

  ngOnInit(): void {
  }

}
