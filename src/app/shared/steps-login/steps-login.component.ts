import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps-login',
  templateUrl: './steps-login.component.html',
  styleUrls: ['./steps-login.component.css']
})
export class StepsLoginComponent implements OnInit {

  loginByPhone = true;
  loginByEmail = false;
  maintitle = 'ورود / ثبت نام به فراپر';
  subtitle = 'شماره موبایل';

  switchLinkName = 'آدرس ایمیل';

  constructor() { }

  ngOnInit(): void {
  }

  NextStep() {
    this.maintitle = 'تائید شماره موبایل';
    this.subtitle = 'کد ۵ رقمی پیامک شده به شماره زیر را وارد کنید';
  }

  LoginByEmail() {
    if (this.loginByPhone === true) {
      this.loginByPhone = false;
      this.maintitle = 'ورود با ایمیل';
      this.subtitle = 'آدرس ایمیل';
      this.switchLinkName = 'شماره موبایل';
      this.loginByEmail = true;
    } else if (this.loginByEmail === true) {
      this.loginByEmail = false;
      this.maintitle = 'ورود / ثبت نام به فراپر';
      this.subtitle = 'شماره موبایل';
      this.switchLinkName = 'آدرس ایمیل';
      this.loginByPhone = true;
    }
  }

}
