import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-user-score',
  templateUrl: './user-score.component.html',
  styleUrls: ['./user-score.component.css']
})
export class UserScoreComponent implements OnInit {

  constructor(
    private profileService: ProfileService
  ) {
    this.profileService.selectedProfileMenuName = 'scores_style';
  }

  ngOnInit(): void {

  }

}
