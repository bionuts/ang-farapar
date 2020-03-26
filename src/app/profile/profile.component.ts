import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile_panel/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  mainMenuSelected: string;

  constructor(
    private profileService: ProfileService
  ) {
  }

  ngOnInit(): void {

  }

  setSelectedMenuStyle(val: string): void {
    this.mainMenuSelected = val;
  }
}
