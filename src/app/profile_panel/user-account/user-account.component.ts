import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { MenuItem } from "../../shared/menu-item";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  items: MenuItem[] = [
    { name: "تغییر رمز عبور", route: "changepassword", icon: "fa-plus-square" },
    { name: "شارژ اعتبار", route: "/account/changepass", icon: "fa-key" },
    { name: "تمدید خطوط", route: "/account/changemobile", icon: "fa-plus-square" },
    { name: "پیگیری بلیط", route: "/account/changeaddress", icon: "fa-plus-square" },
    { name: "پیگیری بلیط", route: "/account/changeaddress", icon: "fa-plus-square" },
    { name: "پیگیری بلیط", route: "/account/changeaddress", icon: "fa-plus-square" }
  ]
  constructor(
    public profileService: ProfileService
  ) {
    this.profileService.selectedProfileMenuName = 'account_style';
  }

  ngOnInit(): void {

  }

}
