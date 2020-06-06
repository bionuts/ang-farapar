import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps-login',
  templateUrl: './steps-login.component.html',
  styleUrls: ['./steps-login.component.css']
})
export class StepsLoginComponent implements OnInit {

  firstStep: boolean;
  loginByEmail: boolean;
  loginByPhone: boolean;


  secondStep: boolean;
  mobile: string = '09392474188';
  mainTitle = 'ورود / ثبت&zwnj;نام به فراپر';
  subTitle = 'لطفا برای ادامه، شماره موبایل خود را وارد کنید';
  label1 = 'شماره موبایل';
  switchLinkName = 'آدرس ایمیل';

  constructor() {
  }

  ngOnInit(): void {
    this.firstStep = true;
    this.loginByPhone = true;
    this.loginByEmail = false;
    this.secondStep = false;
  }

  NextStep() {
    this.firstStep = false;
    this.secondStep = true;

    if (this.loginByPhone === true) {
      this.mainTitle = 'تائید شماره موبایل';
      this.subTitle = 'کد ۵ رقمی پیامک شده به شماره زیر را وارد کنید';
    }
  }

  LoginByEmail() {
    if (this.loginByPhone === true) {
      this.loginByPhone = false;
      this.mainTitle = 'ورود با ایمیل';
      this.label1 = 'آدرس ایمیل';
      this.subTitle = 'لطفاً برای ادامه، آدرس ایمیل خود را وارد کنید';
      this.switchLinkName = 'شماره موبایل';
      this.loginByEmail = true;
    } else if (this.loginByEmail === true) {
      this.loginByEmail = false;
      this.label1 = 'شماره موبایل';
      this.mainTitle = 'ورود / ثبت نام به فراپر';
      this.subTitle = 'لطفاً برای ادامه، شماره موبایل خود را وارد کنید';
      this.switchLinkName = 'آدرس ایمیل';
      this.loginByPhone = true;
    }
  }

}
