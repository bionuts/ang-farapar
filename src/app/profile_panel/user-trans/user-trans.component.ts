import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-user-trans',
  templateUrl: './user-trans.component.html',
  styleUrls: ['./user-trans.component.css']
})
export class UserTransComponent implements OnInit {

  constructor(private profileService: ProfileService) {
    this.profileService.selectedProfileMenuName = 'trans_style';
  }

  ngOnInit(): void {
  }

}
