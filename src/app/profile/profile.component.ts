import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile_panel/profile.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    public profileService: ProfileService
  ) {
  }

  ngOnInit(): void {

  }

}
