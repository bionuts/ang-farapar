import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { MenuItem } from '../../shared/menu-item';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  items: MenuItem[] = [
    { name: 'اطلاعات کاربری', route: '/profile/account', icon: 'fa-info-circle' },
    { name: 'تغییر رمز عبور', route: 'changepassword', icon: 'fa-key' },
    { name: 'ویرایش ایمیل', route: 'editemail', icon: 'fa-envelope' },
    { name: 'ویرایش شماره موبایل', route: 'editmobile', icon: 'fa-phone-square' },
    { name: 'اطلاعات بانکی', route: 'bank', icon: 'fa-credit-card' },    
    { name: 'خروج از حساب کاربری', route: 'exit', icon: 'fa-door-open' }
  ];

  constructor(
    public profileService: ProfileService
  ) {
    this.profileService.selectedProfileMenuName = 'account_style';
  }

  ngOnInit(): void {

  }

}
